"use server";

import Stripe from "stripe";
import { Cart } from "../../Typing";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(cart: Cart[]) {
  try {
    const line_items = cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.title },
        unit_amount: +item.price * 100, // Convert dollars to cents
      },
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "amazon_pay"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
    });

    return session.url; // Redirect URL for Stripe Checkout
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return null;
  }
}

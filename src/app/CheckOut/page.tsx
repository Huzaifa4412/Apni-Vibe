"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/app/store";
import { Cart } from "../../../Typing";
import CheckOut from "@/actions/CheckOut";
import { toast } from "react-toastify";
import { createCheckoutSession } from "@/actions/StripeCheckOut";
import { clearCart } from "@/store/features/cartSlice";

export default function CheckoutPage() {
  const HandleCheckOut = async (cart: Cart[]) => {
    const sessionUrl = await createCheckoutSession(cart);
    toast.success("Payment Successful! Your order is being processed.");
    if (sessionUrl) {
      window.location.href = sessionUrl;
    } else {
      toast.error("Failed to create Stripe session.");
    }
  };
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (total, curr: Cart) => total + Number(curr.price) * curr.qty,
    0
  );
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
          Checkout
        </h1>
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            CheckOut(formData, cart);
            toast.success("Order Placed Successfully 🎉");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              city: "",
              phone: "",
              postalCode: "",
              country: "",
            });
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Customer Information Form */}
            <div className="lg:col-span-3 border-2 border-black rounded-lg p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b-2 border-black">
                Customer Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 my-5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={handleChange}
                    value={formData.firstName}
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
                <div className="space-y-2 my-5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold uppercase tracking-wide "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2 my-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="space-y-2 my-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="space-y-2 my-5">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  onChange={handleChange}
                  value={formData.address}
                  name="address"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    onChange={handleChange}
                    value={formData.city}
                    name="city"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    onChange={handleChange}
                    value={formData.postalCode}
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2 my-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    onChange={handleChange}
                    value={formData.country}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors appearance-none text-lg"
                  >
                    <option value="">Select a country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2 border-2 border-black rounded-lg p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-bold mb-10 pb-4 border-b-2 border-black">
                Order Summary
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">Rs {total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shippingMethod === "express" ? "50" : "25"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">Rs {10}</span>
                </div>
                <div className="border-t-2 border-black pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">Total</span>
                    <span className="text-2xl font-bold">
                      Rs{" "}
                      {
                        shippingMethod === "express"
                          ? total + 50 + 10 // total + shipping + tax
                          : total + 25 + 10 // total + shipping + tax
                      }
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="font-semibold text-xl mb-4">Order Details</h3>
                <div className="bg-gray-100 p-6 rounded-md">
                  <div className="flex !justify-between w-full items-center mb-2">
                    <span className="font-medium">Product Name</span>
                    <span className="font-medium ">Quantity</span>
                    <hr />
                  </div>
                  <div className="flex flex-col justify-between gap-1 text-sm text-gray-600">
                    {cart.map((item) => {
                      return (
                        <div
                          className="flex justify-between items-center "
                          key={item.id}
                        >
                          <span>{item.title}</span>
                          <span>{item.qty}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="font-semibold text-xl mb-4">Shipping Method</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="form-radio text-black focus:ring-2 focus:ring-black"
                    />
                    <span className="text-lg">Standard Shipping (25)</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="form-radio text-black focus:ring-2 focus:ring-black"
                    />
                    <span className="text-lg">Express Shipping (50)</span>
                  </label>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                Place Order
              </button>
              <button
                onClick={() => {
                  HandleCheckOut(cart);
                  dispatch(clearCart());
                }}
                className="w-full bg-black mt-3 text-white py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Pay Now
              </button>
              <div className="mt-8 flex justify-center space-x-6">
                <Image
                  src="/Footer/visa.png"
                  alt="Visa"
                  width={60}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/Footer/master.png"
                  alt="Mastercard"
                  width={60}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/Footer/paypal.png"
                  alt="PayPal"
                  width={60}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

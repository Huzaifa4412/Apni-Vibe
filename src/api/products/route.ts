// app/api/products/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


// Next.js ko bolo data 60s ke baad refresh kare
export const revalidate = 60;

export async function GET() {
  const query = `*[_type == "product"] | order(_createdAt desc){
    _id,
  _type,
  name,
  price,
  description,
  "image": image.asset->url,
  "other_images": other_images[].asset->url,
  "category":category->title,
  isNew,
  sale,
  discountPercent,
  "discountedPrice": select(
    sale == true && defined(discountPercent) => price - ((price * discountPercent) / 100),
    price
  ),
  rating,
  quantity
}`;

  const products = await client.fetch(query);
  return NextResponse.json(products);
}

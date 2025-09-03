// app/api/products/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


// Next.js ko bolo data 60s ke baad refresh kare
export const revalidate = 60;

export async function GET() {
    const query = `*[_type == "product"] | order(_createdAt desc){
    _id,
    name,
    price,
    discountPercent,
    sale,
    description,
    "image": image.asset->url + "?w=400&h=400&auto=format",
    "other_images": other_images[].asset->url + "?w=400&h=400&auto=format",
    "category": category->title,
    isNew,
    top_selling,
    rating,
    quantity
  }`;

    const products = await client.fetch(query);
    return NextResponse.json(products);
}

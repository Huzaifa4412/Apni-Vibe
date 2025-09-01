"use client";
import { ContextType, DataContext } from "@/app/context/ProductContext";
import React, { useContext } from "react";
import { Product } from "../../../../Typing";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/productCard/ProductCard";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, loading } = useContext(DataContext) as ContextType;

  // 1. Handle loading state
  if (loading) {
    return (
      <div className="container flex justify-center items-center h-[50vh]">
        <p className="text-lg font-medium">Loading products...</p>
      </div>
    );
  }

  // 2. Filter products by category
  const products = data.filter(
    (p: Product) => p.category?.toLowerCase().trim() === params.slug.toLowerCase().trim()
  );


  return (
    <div className="container">
      {/* Breadcrumbs */}
      <div className="breadCrams py-4 flex gap-1 items-center text-sm sm:text-base">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
        <Link href="/ProductsPage" className="hover:underline">
          Shop
        </Link>
        <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
        <h3 className="font-semibold capitalize">{params.slug}</h3>
      </div>

      {/* Products Section */}
      {products.length > 0 ? (
        <div className="productsContainer mt-5 flex flex-wrap justify-center gap-3">
          {products.map((product: Product) => (
            <ProductCard key={product._id} item={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 text-center">
          <p className="text-lg font-medium">
            No products found in{" "}
            <span className="capitalize font-semibold">{params.slug}</span>.
          </p>
          <Link
            href="/ProductsPage"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Back to Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;

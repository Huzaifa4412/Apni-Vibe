"use client";
import { ContextType, DataContext } from "@/app/context/ProductContext";
import React, { useContext } from "react";
import { Product } from "../../../../Typing";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/productCard/ProductCard";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data } = useContext(DataContext) as ContextType;
  const products = data.filter((p: Product) => p.category === params.slug);
  return (
    <div className="container">
      <div className="breadCrams py-4 flex gap-1 items-center">
        <Link href={"/"}>
          <h3>Home</h3>
        </Link>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <Link href={"/ProductsPage"}>
          <h3>Shop</h3>
        </Link>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3 className="font-semibold capitalize">{params.slug}</h3>
      </div>
      <div className="productsContainer !mt-5 flex flex-wrap justify-center  flex-shrink-0  gap-[12px]">
        {products.map((product: Product) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;

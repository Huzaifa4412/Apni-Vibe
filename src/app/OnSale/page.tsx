"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { ContextType, DataContext } from "../context/ProductContext";
import { Product } from "../../../Typing";
import ProductCard from "@/components/productCard/ProductCard";

const Page = () => {
  const { data } = useContext(DataContext) as ContextType;
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
        <h3 className="font-semibold capitalize">On Sale</h3>
      </div>
      <div className="products_container flex flex-wrap mt-5 justify-center gap-[14px]">
        {data
          .filter(
            (product: Product) => product.sale === true
          )
          .map((product: Product) => (
            <ProductCard key={product._id} item={product} />
          ))}
      </div>
    </div>
  );
};

export default Page;

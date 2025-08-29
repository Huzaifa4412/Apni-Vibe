"use client";
import React, { useContext } from "react";
import { ContextType, DataContext } from "../context/ProductContext";
import ProductCard from "@/components/productCard/ProductCard";
import Heading from "@/components/Heading/Heading";
import { Product } from "../../../Typing";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Page = () => {
  const { data } = useContext(DataContext) as ContextType;
  return (
    <div
      id="NewArrival"
      className={` container flex flex-col items-center justify-center gap-10`}
    >
      <Heading text="New Arrivals" />
      <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
        {data !== undefined &&
          data
            .filter((data) => data.new)
            .map((product: Product) => (
              <ProductCard key={product._id} item={product} />
            ))}
      </div>

      <div className="w-max">
        <Link href={"/ProductsPage"}>
          <Button text="View All" dark_variant={false} />
        </Link>
      </div>
    </div>
  );
};

export default Page;

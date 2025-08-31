"use client";
import React, { useContext } from "react";
import Styles from "./TopSelling.module.css";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";
// import { client } from "@/sanity/lib/client";
import { Product } from "../../../Typing";
import { ContextType, DataContext } from "@/app/context/ProductContext";

// const getProduct = async () => {
//   try {
//     const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }[0..3]`;

//     const product = client.fetch(quary);
//     return product;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function TopSelling() {

  const { data } = useContext(DataContext) as ContextType;
  const filteredData = data.filter((data) => data.top_selling === true);

  data.splice(4);

  return (
    <div
      className={`${Styles.TopSelling} border-t container flex flex-col  items-center gap-10`}
    >
      <Heading text="Top Selling" />
      <div className="productsContainer flex flex-wrap flex-shrink-0 justify-center  gap-[8px]">
        {filteredData !== undefined &&
          filteredData.map((product: Product) => (
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
}

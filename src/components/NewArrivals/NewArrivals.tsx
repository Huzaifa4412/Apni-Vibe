"use client";
import React, { useContext } from "react";
import Styles from "./NewArrivals.module.css";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";
// import { client } from "@/sanity/lib/client";
import { Product } from "../../../Typing";
import { ContextType, DataContext } from "@/app/context/ProductContext";

// const getProduct = async () => {
//   try {
//     const quary = `*[_type == "product" && isNew == true]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }[0..3]`;

//     const product = client.fetch(quary);
//     return product;
//   } catch (error) {
//     console.log(error);
//   }
// };
export default function NewArrivals() {
  // const data = await getProduct();
  const { data } = useContext(DataContext) as ContextType;
  const filteredData = data.filter((data) => data.isNew === true);
  filteredData.splice(8);

  return (
    <div
      id="NewArrival"
      className={`${Styles.NewArrivals} container flex flex-col items-center justify-center gap-10`}
    >
      <Heading text="New Arrivals" />
      <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
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

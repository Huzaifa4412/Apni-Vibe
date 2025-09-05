// import React, { useContext } from "react";
import Styles from "./TopSelling.module.css";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../Typing";
// import { ContextType, DataContext } from "@/app/context/ProductContext";

const getProduct = async () => {
  try {
    const query = `*[_type == "product" && top_selling]  | order(_createdAt desc) {name,"image":image.asset -> url,rating, price, discountPercent,_id, "discountedPrice": select(sale == true && defined(discountPercent) => price - ((price * discountPercent) / 100), price) }[0..7]`;

    const product = client.fetch(query);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export default async function TopSelling() {

  const data: Product[] = await getProduct();

  return (
    <div
      className={`${Styles.TopSelling} border-t container flex flex-col  items-center gap-10`}
    >
      <Heading text="Top Selling" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {data.map((item: Product) => (
          <ProductCard key={item._id} item={item} />
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

import React, { useContext } from "react";
import Heading from "@/components/Heading/Heading";
import ProductCard from "../productCard/ProductCard";
import { Product } from "../../../Typing";
import { ContextType, DataContext } from "@/app/context/ProductContext";

const MightLike = ({ category }: { category: string }) => {
  const { data } = useContext(DataContext) as ContextType;
  const groupedByCategory = data.reduce(
    (acc, item: Product) => {
      const key = item.category;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as { [key: string]: Product[] }
  );
  if (groupedByCategory[category].length > 4) {
    groupedByCategory[category].splice(4);
  }

  return (
    <div>
      <div className="text-center my-8">
        <Heading text="You Might Also Like" />
      </div>
      <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center justify-center">
        {/* {data
          .filter((item: Product) => item.category == category)
          .map((item: Product) => (
            <ProductCard key={item._id} item={item} />
          ))} */}
        {groupedByCategory[category].map((item: Product) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MightLike;

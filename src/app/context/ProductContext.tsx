"use client";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Typing";
import { client } from "@/sanity/lib/client";
// import { getAllProducts } from "@/sanity/lib/data";

export const revalidate = 10;

export interface ContextType {
    data: Product[];
    loading: boolean;
}

export const DataContext = createContext<ContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "product"] | order(_createdAt desc){
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
}`
            )
            .then((res) => setData(res))
            .finally(() => setLoading(false));
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

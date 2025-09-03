"use client";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Typing";
// import { getAllProducts } from "@/sanity/lib/data";
import { client } from "@/sanity/lib/client";

export interface ContextType {
    data: Product[];
    loading: boolean;
}

export const DataContext = createContext<ContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const response = await client.fetch(`*[_type == "product"] | order(_createdAt desc){
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
}`)
                setData(response);
                console.log("Response", data);
            } catch {
                console.error("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        fetch_data();
    }, [data]);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

"use client";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Typing";
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
        fetch("/api/products")
            .then((res) => res.json())
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

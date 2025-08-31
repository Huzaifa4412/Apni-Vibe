"use client";
import { createContext, useEffect, useState } from "react";
import { Product } from "../../../Typing";
import { getAllProducts } from "@/sanity/lib/data";

export interface ContextType {
    data: Product[];
    loading: boolean;
}

export const DataContext = createContext<ContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const data = async () => {
            try {
                const response = await getAllProducts();
                setData(response);
            } catch {
                console.error("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        data();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

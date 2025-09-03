import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// import { Footer } from "@/components/Footer/Footer";
import { Urbanist } from "next/font/google";
import CartProvider from "./CartProvider";
import { Flip, ToastContainer } from "react-toastify";
import DataProvider from "./context/ProductContext";
import CustomCursor from "@/components/CustomCursor/Cursor";
import Footer2 from "@/components/Footer/Footer2";

export const metadata: Metadata = {
    title: "Apni Vibe Store",
    description:
        "Find your choice that suits your vibes. Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
    keywords: ["e-commerce", "shop", "nextjs", "typescript"],
};

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={` ${urbanist.className} antialiased`}
            >
                <ToastContainer
                    position="top-center"
                    autoClose={1200}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Flip}
                />
                <CustomCursor />

                <DataProvider>
                    <CartProvider>
                        <Navbar />
                        {children}
                        <Footer2 />
                    </CartProvider>
                </DataProvider>
            </body>
        </html>
    );
}

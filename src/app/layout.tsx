import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Urbanist } from "next/font/google";
import CartProvider from "./CartProvider";
import { Flip, ToastContainer } from "react-toastify";
import DataProvider from "./context/ProductContext";
import CustomCursor from "@/components/CustomCursor/Cursor";

export const metadata: Metadata = {
  title: "Shop.co",
  description:
    "Created by Huzaifa Mukhtar Roll number 499351 github: Huzaifa4412",
  keywords: ["e-commerce", "shop", "nextjs", "typescript"],
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
            <Footer />
          </CartProvider>
        </DataProvider>
      </body>
    </html>
  );
}

"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import RangeSlider from "@/components/RangeSlider/RangeSelector";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/productCard/ProductCard";
import type { Product } from "../../../Typing";
import Link from "next/link";
import { type ContextType, DataContext } from "../context/ProductContext";
import { toast } from "react-toastify";

interface Filter {
  category?: string;
  lowPrice: number;
  highPrice: number;
  size?: string;
  color?: string;
}

const Page = () => {
  const { data } = useContext(DataContext) as ContextType;
  const [products, setProducts] = useState<Product[]>(data);
  const [filterConfig, setFilterConfig] = useState<Filter>({
    lowPrice: 0,
    highPrice: Math.max(...data.map((item) => Number(item.price))),
  });

  const applyFilters = () => {
    const filteredData = data.filter((item) => {
      const categoryMatch =
        !filterConfig.category || item.category === filterConfig.category;
      const priceMatch =
        Number(item.price) >= filterConfig.lowPrice &&
        Number(item.price) <= filterConfig.highPrice;
      const colorMatch =
        !filterConfig.color ||
        item.colors.some(
          (c) => c.toLowerCase() === filterConfig.color?.toLowerCase()
        );
      const sizeMatch =
        !filterConfig.size ||
        item.sizes.some(
          (s) => s.toLowerCase() === filterConfig.size?.toLowerCase()
        );

      return categoryMatch && priceMatch && colorMatch && sizeMatch;
    });
    setProducts(filteredData);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filterConfig]);

  const updateFilter = (key: keyof Filter, value: string | number) => {
    if (!(key == "highPrice" || key == "lowPrice")) {
      setFilterConfig((prev) => ({ ...prev, [key]: value }));
      return toast.info("Filter Applied");
    }
    setFilterConfig((prev) => ({ ...prev, [key]: value }));
  };

  const categories = Array.from(new Set(data.map((item) => item.category)));
  const colors = Array.from(
    new Set(
      data.flatMap((item) => item.colors.map((color) => color.toLowerCase()))
    )
  );
  const sizes = Array.from(
    new Set(
      data.flatMap((item) => item.sizes.map((size) => size.toLowerCase()))
    )
  );

  const [showPrice, setShowPrice] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="container !px-0">
      <div className="BreadCrams text-[16px] px-5 flex gap-2 items-center">
        <Link href={"/"} className="flex items-center">
          <h3>Home</h3>
          <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        </Link>
        <h3>All Outfits</h3>
      </div>
      <div className="content flex flex-col lg:flex-row gap-8 items-center lg:items-start h-max mt-8">
        <div className="sideBar w-[295px] h-max px-[24px] py-[20px] flex flex-col gap-[24px] border rounded-[20px]">
          <header className="flex w-max items-center gap-6 relative">
            <Heading text="Filter" size={20} />
            <div className="preferenceImage">
              <Image
                src={"/preference.svg"}
                alt="Preference"
                width={24}
                height={24}
                className="relative left-0 lg:w-[24px] lg:h-[24px] w-[30px] h-[30px] cursor-pointer"
                onClick={() => setShowSideBar(!showSideBar)}
              />
            </div>
          </header>
          {showSideBar && (
            <div className="flex flex-col transition-all duration-500 ease-in-out delay-1 gap-[16px]">
              <hr />
              <div className="f_category">
                <div className="categories flex flex-col gap-5">
                  {categories.map((category) => (
                    <div
                      key={category}
                      onClick={() => updateFilter("category", category)}
                      className="t-shirt flex justify-between cursor-pointer"
                    >
                      <h3 className="capitalize">{category}</h3>
                      <Image
                        src={"/arrow.svg"}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="transform transition-transform duration-300 hover:rotate-90"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="f_price">
                <header
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShowPrice(!showPrice)}
                >
                  <h2 className="font-bold text-xl">Price</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${showPrice ? "rotate-180" : ""}`}
                  />
                </header>
                <div
                  className={`transition-all duration-300 ${showPrice ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
                >
                  <RangeSlider
                    filterByPrice={(low, high) => {
                      updateFilter("lowPrice", low);
                      updateFilter("highPrice", high);
                    }}
                  />
                </div>
              </div>
              <hr />
              <div className="colors flex flex-col gap-3">
                <header
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowColors(!showColors)}
                >
                  <h2 className="font-bold text-xl">Colors</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${showColors ? "rotate-180" : ""}`}
                  />
                </header>
                <div
                  className={`colorsContainer flex gap-3 flex-wrap transition-all duration-300 ${
                    showColors ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`color w-[37px] h-[37px] rounded-full hover:border-4 border-[#f2f2f2] cursor-pointer`}
                      style={{ backgroundColor: color }}
                      onClick={() => updateFilter("color", color)}
                    ></div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="size flex flex-col gap-3">
                <header
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowSizes(!showSizes)}
                >
                  <h2 className="font-bold text-xl">Sizes</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${showSizes ? "rotate-180" : ""}`}
                  />
                </header>
                <div
                  className={`colorsContainer flex gap-3 flex-wrap transition-all duration-300 ${
                    showSizes ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {sizes.map((size) => (
                    <div
                      key={size}
                      style={{ fontSize: 16 }}
                      onClick={() => updateFilter("size", size)}
                      className={`size py-[10px] uppercase px-[20px] rounded-[20px] bg-[#F0F0F0] hover:bg-black duration-150 hover:text-white cursor-pointer`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="mt-5"
                onClick={() => {
                  applyFilters();
                  toast.success("All Filters has been Applied ");
                }}
              >
                <Button text="Apply Filter" dark_variant={true} />
              </div>
              <div
                onClick={() => {
                  setFilterConfig({ lowPrice: 0, highPrice: 100000 });
                  setProducts(data);
                  toast.warning("All Filters has been Cleared ");
                }}
              >
                <Button text="Clear Filter" dark_variant={true} />
              </div>
            </div>
          )}
        </div>
        <div className="products_container flex-1">
          {products.length > 0 ? (
            <div className="flex justify-center flex-wrap gap-5">
              {products.map((item: Product) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl text-gray-500">
                No products found according to your Needs
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

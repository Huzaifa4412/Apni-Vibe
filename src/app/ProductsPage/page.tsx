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
  category?: string | number;
  lowPrice: number;
  highPrice: number;
}

const Page = () => {
  const { data } = useContext(DataContext) as ContextType;

  // keep original data intact
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(data);

  const maxPrice = Math.max(...data.map((item) => Number(item.price)));
  const [filterConfig, setFilterConfig] = useState<Filter>({
    lowPrice: 0,
    highPrice: maxPrice,
  });

  // run filters when filterConfig changes
  useEffect(() => {
    const filteredData = data.filter((item) => {
      const categoryMatch =
        !filterConfig.category || item.category === filterConfig.category;
      const priceMatch =
        Number(item.price) >= filterConfig.lowPrice &&
        Number(item.price) <= filterConfig.highPrice;

      return categoryMatch && priceMatch;
    });
    setFilteredProducts(filteredData);
  }, [filterConfig, data]);

  const updateFilter = (key: keyof Filter, value: string | number) => {
    setFilterConfig((prev) => ({ ...prev, [key]: value }));
    if (key !== "lowPrice" && key !== "highPrice") {
      toast.info("Filter Applied");
    }
  };

  const categories = Array.from(new Set(data.map((item) => item.category)));

  const [showPrice, setShowPrice] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="container !px-0">
      {/* Breadcrumbs */}
      <div className="BreadCrams text-[16px] px-5 flex gap-2 items-center">
        <Link href={"/"} className="flex items-center">
          <h3>Home</h3>
          <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        </Link>
        <h3>All Outfits</h3>
      </div>

      <div className="content flex flex-col lg:flex-row gap-8 items-center lg:items-start h-max mt-8">
        {/* Sidebar */}
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
            <div className="flex flex-col gap-[16px]">
              <hr />
              {/* Category Filter */}
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
              {/* Price Filter */}
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
                    className={`transform transition-transform duration-300 ${showPrice ? "rotate-180" : ""
                      }`}
                  />
                </header>
                <div
                  className={`transition-all duration-300 ${showPrice ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                >
                  <RangeSlider
                    highPrice={maxPrice}
                    filterByPrice={(low, high) => {
                      updateFilter("lowPrice", low);
                      updateFilter("highPrice", high);
                    }}
                  />
                </div>
              </div>

              {/* Clear Filter */}
              <div
                onClick={() => {
                  setFilterConfig({ lowPrice: 0, highPrice: maxPrice });
                  toast.warning("All Filters Cleared");
                }}
              >
                <Button text="Clear Filter" dark_variant={true} />
              </div>
            </div>
          )}
        </div>

        {/* Product List */}
        <div className="products_container flex-1">
          {filteredProducts.length > 0 ? (
            <div className="flex justify-center flex-wrap gap-5">
              {filteredProducts.map((item: Product) => (
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

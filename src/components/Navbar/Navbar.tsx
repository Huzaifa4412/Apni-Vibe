"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/app/store";
import { type ContextType, DataContext } from "@/app/context/ProductContext";
import type { Product } from "../../../Typing";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";

const Navbar = () => {
  const router = useRouter();
  const { data } = useContext(DataContext) as ContextType;
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const [products,] = useState<Product[]>(data);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState<Product[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [searchBar, setSearchBar] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // Added state for Shop dropdown

  const categories = [...new Set(data.map(p => p.category))];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (searchQuery !== "") {
      const filteredData = products.filter(
        (product) =>
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchData(filteredData);
    }
  }, [searchQuery, products]);
  const HandlerKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
        setSelectedItem(selectedItem + 1);
      } else if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem(selectedItem - 1);
      } else if (e.key === "Enter") {
        setSearchQuery("");
        setSearchBar(false);
        setSearchData([]);
        router.push(`/ProductsPage/${searchData[selectedItem]._id}`);
      }
    } else {
      setSelectedItem(-1);
    }
  };
  return (
    <div className={` ${Styles.Navbar} relative bg-white`}>
      <div
        className={`${Styles.updatePart} bg-black remove w-full h-[38px] text-white`}
      >
        <div className="flex items-center md:text-[14px] text-[11px] relative justify-center h-full max-w-[1440px] mx-auto">
          <p className="font-medium">
            Get 20% off to your first order.{" "}
            <span className=" px-3 py-1 rounded-full">Shop Now</span>
          </p>
          <Image
            src={"/cross.svg"}
            className="absolute right-3 cursor-pointer"
            alt="Cross Icon"
            width={20}
            height={20}
            onClick={() => {
              document.querySelector(".remove")?.remove();
            }}
          />
        </div>
      </div>
      <nav className="lg:w-[1024px] xl:w-[1240px] h-[48px] xl:gap-[40px] mx-auto my-5 flex items-center justify-evenly md:justify-center  sm:gap-[20px] gap-[10px]">
        <Image
          src={"/Menu.svg"}
          alt="Menu Icon"
          width={28}
          height={28}
          className={`${Styles.menu} block relative  md:hidden order-1 sm:order-2`}
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        />
        <Link href={"/"} className="order-1 sm:order-2">
          {/* <div className={`${Styles.logo} text-[32px] font-ld `}>SHOP.CO</div> */}
          <Image src={"/logo-main.svg"} alt="Logo" className="w-auto h-[70px] object-cover rounded-full" width={100} height={100} />
        </Link>
        <div className={`${Styles.nav_items} order-1 sm:order-2`}>
          <ul
            className={`hidden ${Styles.nav_list} duration-500 relative ${isMenuOpen ? `${Styles.active}` : ""
              } md:flex text-[16px]  gap-[22px] items-center font-medium`}
          >
            <li
              className="flex items-center gap-1 relative"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <Link href="/ProductsPage" >All Products</Link>
              <Image
                src="/dropDown.svg"
                alt="Drop Down Icon"
                width={15}
                height={15}
                className={`transform transition-transform duration-300 ${isShopDropdownOpen ? "rotate-180" : ""}`}
              />
              {isShopDropdownOpen && (
                <div className="absolute top-[110%] left-1/2 bg-white shadow-md rounded-md py-2 w-60 -translate-x-1/2 z-[9999]">
                  {categories.map((category, index) => (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      key={index}
                      href={`/${category}`}
                      className="block px-4 capitalize py-2 text-lg hover:bg-black hover:text-white text-black"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link href={"/NewArrivals"}>New Arrival</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              {/* <TransitionLink href={"/"} label="On Sale" /> */}
              <Link href={"/OnSale"}>On Sale</Link>
            </li>


            <Image
              src={"/cross.svg"}
              alt="Cross Icon"
              width={30}
              height={30}
              className="invert block md:hidden absolute top-8 right-8"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </ul>
        </div>

        {/* For Large Screen Devices */}
        <div
          className={`${Styles.searchBar} hidden relative order-3 px-[16px] py-[12px] rounded-[62px] xl:w-[550px] h-[full] md:flex items-center gap-[6px]`}
          style={{ backgroundColor: "var(--light-gray)" }}
        >
          <Image
            src={"/searchIcon.svg"}
            alt="Search Icon"
            width={21}
            height={21}
          />

          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="bg-transparent w-full h-full outline-none ml-1 duration-500"
            placeholder={` Search For Products...`}
            onKeyDown={(e) => {
              HandlerKeys(e);
            }}
          />

          {searchQuery !== "" && (
            <>
              <div className="searchData bg-white w-[330px] lg:w-[400px] xl:w-full  px-6 py-3 h-max z-[99] shadow-lg absolute top-[150%] rounded-md left-0 overflow-y-auto">
                {searchData.length > 0 && searchQuery !== "" ? (
                  searchData.slice(0, 6).map((product: Product) => (
                    <Link
                      onClick={() => {
                        setSearchQuery("");
                        setSearchBar(false);
                        setSearchData([]);
                      }}
                      href={`/ProductsPage/${product._id}`}
                      className={`flex items-center  gap-2 my-3 ${selectedItem === searchData.indexOf(product) ? "bg-[#F5F5F5]" : ""}`}
                      key={product._id}
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="w-[80px] h-[80px] rounded-lg object-cover"
                      />
                      <p className="font-medium">{product.name}</p>
                    </Link>
                  ))
                ) : (
                  <p className="flex text-xl items-center justify-center w-full h-full">
                    No Product Found
                  </p>
                )}
                <Link href={"/ProductsPage"}>
                  <div
                    className="mt-10 w-[400px] mx-auto"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchBar(false);
                      setSearchData([]);
                    }}
                  >
                    <Button dark_variant={true} text="View All Products" />
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
        {/* For Small Screen Devices */}
        <div className="order-3 md:hidden">
          <Image
            src={"/searchIcon.svg"}
            alt="Search Icon"
            width={30}
            height={30}
            className=" backdrop-invert-0"
            onClick={() => {
              setSearchBar(!searchBar);
            }}
          />
        </div>
        {searchBar && (
          <div className="absolute top-[100%] z-[99] w-full md:hidden">
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              autoFocus
              className=" w-full p-4 text-xl outline-none ml-1 duration-500 h-max"
              placeholder={` Search For Products...`}
              onKeyDown={(e) => {
                HandlerKeys(e);
              }}
            />
            {searchQuery !== "" && (
              <>
                <div className="searchData bg-white w-full  px-6 py-3 h-max z-[99] shadow-lg absolute top-[90%] rounded-md left-0 overflow-y-auto">
                  {searchData.length > 0 && searchQuery !== "" ? (
                    searchData.slice(0, 6).map((product: Product) => (
                      <Link
                        onClick={() => {
                          setSearchQuery("");
                          setSearchBar(false);
                          setSearchData([]);
                        }}
                        href={`/ProductsPage/${product._id}`}
                        className={`flex items-center  gap-2 my-3 ${selectedItem === searchData.indexOf(product) ? "bg-[#F5F5F5]" : ""}`}
                        key={product._id}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="w-[80px] h-[80px] rounded-lg object-cover"
                        />
                        <p className="font-medium">{product.name}</p>
                      </Link>
                    ))
                  ) : (
                    <p className="flex text-xl items-center justify-center w-full h-full">
                      No Product Found
                    </p>
                  )}
                  <Link href={"/ProductsPage"}>
                    <div
                      className="w-[200px] mx-auto mt-10"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchBar(false);
                        setSearchData([]);
                      }}
                    >
                      <Button dark_variant={true} text="View All Products" />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
        <div className="icons flex gap-4 order-4">
          <Link href={"/Cart"} className="flex relative">
            <Image
              src={"/card.svg"}
              alt="Card"
              width={25}
              height={25}
              className="w-6 !h-6"
            />
            <div className="w-5 absolute -bottom-2 -right-2 text-[10px] h-5 rounded-full bg-black text-white flex items-center justify-center">
              {cart.length}
            </div>
          </Link>

          <Link href={"/studio"}>
            <Image src={"/account.svg"} alt="Account" width={25} height={25} />
          </Link>
        </div>
      </nav>
      <hr className=" h-[1px] mx-auto max-w-[1440px]" />
    </div >
  );
};

export default Navbar;

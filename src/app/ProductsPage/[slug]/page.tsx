"use client";
import React, { useState, useEffect } from "react";
import { Watch } from "react-loader-spinner";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Button from "@/components/Button/Button";
import { Cart } from "../../../../Typing";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Rating from "@/components/Rating/Rating";
import MightLike from "@/components/MightLike/MightLike";
import CommentForm from "@/components/CommentSection/CommentForm";
import CommentList from "@/components/CommentSection/Comments";

// import MightLike from "@/components/MightLike/MightLike";

// Define proper types
interface ProductResponse {
  name: string;
  rating: number;
  discountPercent: number;
  colors: string[];
  image: string;
  category: string;
  price: string;
  sizes: string[];
  description: string;
  discountedPrice: string;
  _id: string;
}
async function getSingleProduct(slug: string): Promise<ProductResponse | null> {
  try {
    const query = `*[_type == "product" && _id == $slug][0]{
      name, 
      rating, 
      discountPercent, 
      colors, 
      "image":image.asset->url,
      category,
      price,
      sizes,
      description,
      discountedPrice, 
      _id
    }`;
    const product = await client.fetch<ProductResponse>(query, { slug });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const router = useRouter();
  const dispatch = useDispatch();
  const [p_size, setP_Size] = useState<string>();
  const [p_color, setP_Color] = useState<string>();
  const [p_qty, setP_qty] = useState<number>(1);
  const [product, setProduct] = useState<ProductResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const productData = await getSingleProduct(slug);
        if (!productData) {
          setError("Product not found");
          return;
        }
        setProduct(productData);
      } catch (err) {
        setError("Failed to fetch product");
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#111"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />{" "}
      </div>
    );
  }
  if (error)
    return (
      <div className="text-center font-bold w-full h-screen text-2xl flex items-center justify-center">
        Error: {error}
      </div>
    );
  if (!product) return <div>Product not found</div>;
  const {
    name,
    price,
    _id,
    category,
    rating,
    discountedPrice,
    description,
    image,
    discountPercent,
    sizes,
    colors,
  } = product;
  const AddToCartHandler = (data: Cart) => {
    try {
      dispatch(addToCart(data));
      toast("🎉 Item Added to the Cart", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        onClick: () => {
          router.push("/Cart");
        },
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    }
  };
  return (
    <div className="!pt-0 max-w-[1440px] px-4 mx-auto py-[40]">
      <div className="breadCrams py-4 flex items-center">
        <Link href={"/"}>
          <h3>Home</h3>
        </Link>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Shop</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Men</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3 className="font-semibold">{category}</h3>
      </div>

      <div className="productDetails flex lg:flex-row flex-col gap-8">
        <div className="productImages flex flex-col items-center lg:flex-row gap-4">
          <div className="mainImage order-1 sm:h-[530px] overflow-hidden w-[330px] h-[290px] sm:w-[444px] bg-[#F0EEED] rounded-[20px]">
            <Image
              src={image ?? ""}
              alt={name ?? "Product"}
              width={444}
              height={530}
              className="object-cover overflow-hidden w-full h-full"
            />
          </div>
        </div>

        <div className="details flex flex-col gap-4">
          <div>
            <Heading text={name ?? ""} />
          </div>
          {rating && <Rating rating={rating} />}
          <div className="price text-[32px] font-bold gap-2 flex items-center">
            <h2>Rs {discountedPrice}</h2>
            <h2 className="line-through text-slate-400">Rs {price}</h2>
            {discountPercent > 0 && (
              <div className="tag w-[72px] h-[34px] rounded-[62px] bg-red-200 text-red-500 text-xl flex items-center justify-center font-medium">
                {discountPercent}%
              </div>
            )}
          </div>

          <div className="description">
            <p className="text-slate-500 text-[16px] font-medium">
              {description}
            </p>
          </div>

          <div>
            <hr />
          </div>

          <div className="selectedColors flex flex-col my-2 gap-2">
            <h3 className="font-medium text-xl">Select Colors</h3>
            <div className="colors_container flex gap-2">
              {colors?.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setP_Color(color)}
                  className={`color w-[37px] ${
                    p_color === color && "border-2 border-black p-1 scale-110"
                  } h-[37px] rounded-full border-2 hover:border-black hover:bg-black focus:border-2 focus:border-black`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="chooseSize flex flex-col gap-2">
            <h3 className="font-medium text-xl">Select Size</h3>
            <div className="sizes_container grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-max gap-2">
              {sizes?.map((size, index) => (
                <div
                  className={`w-max flex-shrink-0 ${
                    p_size === size && "invert"
                  }`}
                  key={index}
                  onClick={() => setP_Size(size)}
                >
                  <Button dark_variant={false} text={size} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="flex gap-5">
            <div className="q_btns bg-[#F0F0F0] w-[170px] hover:bg-slate-200 rounded-[62px] py-[12px] px-[20px] flex items-center justify-between">
              <button
                onClick={() => setP_qty((prev) => Math.max(1, prev - 1))}
                className="cursor-pointer"
              >
                <Image src="/incr.svg" alt="decrement" width={24} height={24} />
              </button>
              <span className="text-black text-2xl font-bold">{p_qty}</span>
              <button
                onClick={() => setP_qty((prev) => prev + 1)}
                className="cursor-pointer"
              >
                <Image src="/desc.svg" alt="increment" width={24} height={24} />
              </button>
            </div>

            <div
              className="lg:w-full flex items-center w-[50%]"
              onClick={() =>
                AddToCartHandler({
                  id: _id,
                  title: name,
                  image: image,
                  qty: p_qty,
                  price: discountedPrice?.toString() || price?.toString(),
                  p_color: p_color || "Random",
                  p_size: p_size || "Random",
                })
              }
            >
              <Button text="Add to Cart" dark_variant={true} />
            </div>
          </div>
        </div>
      </div>
      <CommentForm postID={product._id} />
      {/* <Review /> */}
      <CommentList postID={product._id} />
      <MightLike category={category} />
    </div>
  );
};

export default Page;

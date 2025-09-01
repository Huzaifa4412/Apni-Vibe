"use client";
import React, { useState, useEffect } from "react";
import { Watch } from "react-loader-spinner";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { Cart, Product } from "../../../../Typing";
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
import { space_grotesk } from "@/lib/fonts";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


// import MightLike from "@/components/MightLike/MightLike";


async function getSingleProduct(slug: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && _id == $slug][0]{
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
    }`;
    const product = await client.fetch<Product>(query, { slug });
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
  const [p_qty, setP_qty] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>("");




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
    other_images,
    discountPercent,
    quantity,
    sale
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

      <div className="productDetails flex lg:flex-row flex-col gap-8 mt-10" >
        <div className="productImages flex flex-col items-center gap-4">
          {/* Main Image */}
          <div className="mainImage order-1 overflow-hidden w-[330px] h-[290px] sm:w-[444px] bg-[#F0EEED] rounded-[20px]">
            <Zoom>
              <Image
                src={mainImage !== "" ? mainImage : image}
                alt={name ?? "Product"}
                width={444}
                height={530}
                className="!object-cover w-full h-full"
              />

            </Zoom>
          </div>
          {/* Other Images */}
          <div
            className="
      other_images 
      order-2 
      flex items-center justify-start 
      gap-3 
      w-full
      max-w-[700px] 
      overflow-x-auto 
      sm:flex-wrap sm:justify-center
      scrollbar-hide
    "
          >
            {other_images && other_images.length > 0 ? (
              other_images.map((img, index) => (

                <>
                  <Image
                    key={index}
                    src={img}
                    alt={`${name} - Image ${index + 1}`}
                    width={150}
                    height={100}
                    className="
            object-cover 
            w-[110px] h-[100px] 
            sm:w-[160px] sm:h-[120px] 
            rounded-[12px] bg-[#F0EEED] 
            flex-shrink-0
          "
                    onClick={() => setMainImage(img)}
                  />

                </>
              ))
            ) : (
              <p>No additional images available</p>
            )}
          </div>
        </div>

        <div className="details flex flex-col gap-4">
          <div>
            {/* <Heading text={name ?? ""} /> */}
            <h2 className={`${space_grotesk.className} md:text-4xl font-bold text-3xl text-center sm:text-left w-full uppercase px-2`}>
              {name ?? ""}
            </h2>
          </div>

          {rating && <Rating rating={rating} />}
          {
            sale && discountPercent && discountPercent > 0 ? (
              <div className="price text-[32px] font-bold gap-2 flex items-center">
                <h2>Rs {discountedPrice}</h2>
                <h2 className="line-through text-slate-400">Rs {price}</h2>
                {discountPercent && discountPercent > 0 && (
                  <div className="tag w-[72px] h-[34px] rounded-[62px] bg-red-200 text-red-500 text-xl flex items-center justify-center font-medium">
                    {discountPercent}%
                  </div>
                )}
              </div>
            ) :
              (
                <div className="price text-[32px] font-bold gap-2 flex items-center">
                  <h2>Rs {price}</h2>
                </div>
              )
          }
          <div className="qty">
            <p className="text-slate-500 text-[16px] font-medium">
              {quantity && quantity > 0 ? `In Stock: ${quantity}` : "Out of Stock"}
            </p>
          </div>
          <div className="description">
            <p className="text-slate-500 text-[16px] font-medium">
              {description}
            </p>
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
    </div >
  );
};

export default Page;

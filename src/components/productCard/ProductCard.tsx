"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "../../../Typing";
// import { Rating } from "../../app/ProductsPage/[slug]/page";
import Rating from "../Rating/Rating";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";

function ProductCard({ item }: { item: Product }) {
  const { image, name, rating, _id, price, discountPercent, discountedPrice } =
    item;

  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 35, // Maximum tilt angle
        perspective: 2000, // Defines the 3D depth (the higher, the more dramatic the effect)
        speed: 400, // Speed of the tilt effect
        easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing for a better experience
      });
    }
  }, []);
  // const id = `${title.replace(/-/g, "_")}${new Date().getMilliseconds()}`;
  return (
    <Link href={`/ProductsPage/${_id}`}>
      <div
        id={_id}
        ref={tiltRef}
        className={`hover:shadow-xl p-3 grid w-[290px] justify-between  overflow-hidden] `}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={image}
          alt="Product 1"
          width={290}
          height={298}
          className="mb-[5px] w-[290px] h-[298px] object-cover rounded-[20px] object-center"
          style={{
            transform: "translateZ(40px)",
          }}
        />
        <h3 className="font-bold text-[20px] capitalize">{name}</h3>
        <div className="rating flex gap-[8px]">
          {<Rating rating={rating || 5} />}
        </div>
        <div className="price flex gap-[10px]">
          <h3 className="text-[24px] font-bold">${discountedPrice}</h3>
          {discountPercent && discountPercent > 0 && (
            <div className="discount">
              <div className="DiscountPrice flex gap-[10px]">
                <h3 className="text-[24px] font-bold text-[#000000]/40">
                  Rs {price}
                </h3>
                <div className="discountTag bg-[#FF3333]/10 py-[6px] px-[14px] text-[#FF3333] rounded-[62px]">
                  {discountPercent}%
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

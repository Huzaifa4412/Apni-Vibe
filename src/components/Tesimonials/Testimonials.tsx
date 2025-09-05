"use client";
import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Ayesha Khan",
    desc: `"ApniVibe ki jewellery collection bohat classy hai. Har piece lightweight aur elegant lagta hai. Mujhe specially unka bracelet bohat pasand aya. Online photos aur real product bilkul same nikla.”`,
    blur: false,
  },
  {
    name: "Hamza Raizi",
    desc: `"Main ne ApniVibe se smart watch order ki thi aur honestly, value for money hai. Design stylish, battery timing zabardast aur delivery bhi time pe thi. Recommend karunga sabko.”`,
    blur: false,
  },
  {
    name: "Sana F.",
    desc: `"Perfume collection ApniVibe ka bohat hi unique hai. Fragrances long-lasting hain aur packaging bhi bohat premium thi. Price bhi reasonable tha as compared to malls.”`,
    blur: false,
  },
  {
    name: "Bilal Hashmi",
    desc: `"Mujhe bags ka collection bohat acha laga ApniVibe pe. Trendy aur durable dono cheezain ek saath milti hain. Mere dost bhi puch rahe the bag kahan se liya hai 😅.”`,
    blur: true,
  },
  {
    name: "Zara Malik",
    desc: `"ApniVibe se pehli dafa order kiya tha airbuds aur honestly expectations cross kar gayi. Sound quality clear hai, bass strong hai aur case bhi sleek design ka hai.”`,
    blur: false,
  },
];


export default function Testimonials() {
  return (
    <div className="container">
      <div className="heading text-start mb-10 flex flex-col sm:flex-row items-center gap-5 justify-between">
        <Heading text="OUR HAPPY CUSTOMERS" />
        <div className="arrows flex gap-2">
          <Image
            src={"/Testimonials/arrow-down.svg"}
            alt="Arrow left"
            width={20}
            height={20}
            className="custom-prev cursor-pointer hover:opacity-60"
          />
          <Image
            className="rotate-180 custom-next cursor-pointer hover:opacity-60"
            src={"/Testimonials/arrow-down.svg"}
            alt="Arrow right"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="testimonialsContainer flex gap-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            // Configure breakpoints for different screen sizes
            420: {
              slidesPerView: 1, // 1 slide for screens >= 320px
            },
            950: {
              slidesPerView: 2, // 2 slides for screens >= 640px
            },
            1380: {
              slidesPerView: 3, // 3 slides for screens >= 1024px
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next", // Custom "next" button selector
            prevEl: ".custom-prev", // Custom "previous" button selector
          }}
          modules={[Navigation, Pagination]}
          className="testimonials Slider flex items-center justify-center"
        >
          {testimonials.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  key={idx}
                  className="testimonial cursor-grab items-center justify-center flex-shrink-0 mx-auto flex flex-col gap-2 px-[32px] py-[24px] w-[355px] sm:w-[390px] h-[240px] border-2 rounded-[20px]"
                >
                  <Image
                    src={"/Testimonials/startsFrame.svg"}
                    alt="Rating"
                    width={139}
                    height={23}
                  />
                  <div className="intro flex gap-2">
                    <div className="name">{item.name}</div>
                    <Image
                      src={"/Testimonials/verify.svg"}
                      alt="Verify"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="content text-[#000000]/60 text-[16px] font-light">
                    {item.desc}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

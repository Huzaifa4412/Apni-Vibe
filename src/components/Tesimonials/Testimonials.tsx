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
    name: "Sarah M.",
    desc: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    blur: false,
  },
  {
    name: "Alex K.",
    desc: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    blur: false,
  },
  {
    name: "James L.",
    desc: `"James L.
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.””`,
    blur: false,
  },
  {
    name: "James L.",
    desc: `"James L.
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.””`,
    blur: true,
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

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  {
    src: "/Brands/b1.svg",
    w: 150,
  },
  {
    src: "/Brands/b2.svg",
    w: 100,
  },
  {
    src: "/Brands/b3.svg",
    w: 150,
  },
  {
    src: "/Brands/b4.svg",
    w: 180,
  },
  {
    src: "/Brands/b5.svg",
    w: 180,
  },
];

export default function Brands() {
  return (
    // <div
    //   className=" p-5 flex items-center gap-[40px] justify-center lg:justify-evenly flex-wrap md:h-max"
    //   style={{ backgroundColor: "var(--foreground)" }}
    // >
    //   {brands.map((item, index) => {
    //     return (
    //       <Image
    //         src={item.src}
    //         alt={`Brand${index}`}
    //         width={item.w}
    //         height={120}
    //         key={index}
    //         className=" lg:h-[120px] h-[40px] "
    //       />
    //     );
    //   })}
    // </div>
    <Marquee
      className="py-4 h-max overflow-y-hidden bg-black"
      gradient={true}
      gradientColor={"black"}
      gradientWidth={200}
      speed={50}
      pauseOnHover={true}
      autoFill={true}
      direction="left"
      // style={{ backgroundColor: "var(--foreground)" }}
    >
      {brands.map((item, index) => {
        return (
          <Image
            src={item.src}
            alt={`Brand${index}`}
            width={item.w}
            height={120}
            key={index}
            className=" lg:h-[120px] h-[40px] mx-12"
          />
        );
      })}
    </Marquee>
  );
}

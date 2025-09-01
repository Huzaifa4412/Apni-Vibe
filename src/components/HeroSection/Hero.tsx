"use client";
import React from "react";
import Styles from "./Hero.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import HeroFeatureText from "../HeroFeatureText/HeroFeatureText";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={`${Styles.HeroSection} relative container`}>
      <div
        className={`${Styles.leftPart} w-1/2 flex flex-col relative  gap-10`}
      >
        <h1
          className={`xl:text-[64px] text-left uppercase lg:w-full lg:text-[48px] lg:leading-[50px]  text-[40px]  leading-[42px] font-extrabold xl:leading-[64px]`}
        >
          Find your choice that suits your vibes
        </h1>
        <p
          className={`${Styles.paragraphs}  text-[16px] font-medium text-[#000000]/60`}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="button lg:w-[210px] w-full md:w-max mx-auto md:m-0 ">
          <Link href={"/ProductsPage"}>
            <Button text="Shop Now" dark_variant={true} />
          </Link>
        </div>

        <div className="featureText flex flex-wrap gap-6 justify-center">
          <HeroFeatureText text="International Brands" number="200+" />
          <HeroFeatureText text="High-Quality Products" number="2,000+" />
          <HeroFeatureText text="Happy Customers" number="30,000+" />
        </div>
      </div>
      <div className={` ${Styles.rightPart} w-1/2 right-0  relative h-full`}>
        <motion.img
          src="/HeroSection/vector.svg"
          alt="Vector"
          width={104}
          height={104}
          className="absolute right-5 top-[10%] w-[60px] h-[60px] sm:w-[104px] sm:h-[104px]"
          style={{ transformOrigin: "50% 50%" }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            times: [0.3, 0, 1, 0.7, 1],
            // ease: "easeIn", // Smooth easing effect
            duration: 3,
            ease: ["linear", "easeInOut", "easeOut", "easeIn"],
          }}
        />
        <Image
          src={"/HeroSection/model1.png"}
          alt="Model Image"
          width={1000}
          height={15000}
          className="object-cover h-[100%] bottom-0 w-full"
        />
      </div>
    </div>
  );
};

export default Hero;

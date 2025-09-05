"use client";
import React from "react";
import Styles from "./Hero.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import HeroFeatureText from "../HeroFeatureText/HeroFeatureText";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurText from "../BlurText";

const Hero = () => {
  return (
    <div className={`${Styles.HeroSection} relative mx-auto max-w-[1440px]`}>
      <div
        className={`${Styles.leftPart} w-1/2 flex flex-col relative  gap-10`}
      >
        <h1>
          <BlurText
            text="Find your choice that suits your vibes"
            delay={150}
            animateBy="words"
            direction="top"
            className="xl:text-[64px] text-left uppercase lg:w-full lg:text-[48px] lg:leading-[50px]  text-[40px]  leading-[42px] font-extrabold xl:leading-[64px]"
          />

        </h1>

        <p
          className={`${Styles.paragraphs}  text-[16px] font-medium text-[#000000]/60`}
        >

          <BlurText
            text="Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style."
            delay={150}
            animateBy="words"
            direction="top"
          />
        </p>
        <div className="button lg:w-[210px] w-full md:w-max mx-auto md:m-0 ">
          <Link href={"/ProductsPage"}>
            <Button text="Shop Now" dark_variant={true} />
          </Link>
        </div>

        <div className="featureText flex flex-wrap gap-6 justify-center">
          <HeroFeatureText text="International Brands" number="30" />
          <HeroFeatureText text="High-Quality Products" number="500" />
          <HeroFeatureText text="Happy Customers" number="50" />
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
          src={"/HeroSection/hero.png"}
          alt="Model Image"
          height={15000}
          width={1000}
          className="object-cover h-[100%] bottom-0 w-full min-h-[350px]"
        />
      </div>
    </div>
  );
};

export default Hero;

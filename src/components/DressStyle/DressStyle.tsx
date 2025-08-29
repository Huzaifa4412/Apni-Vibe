import React from "react";
import Styles from "./DressStyle.module.css";
import Heading from "../Heading/Heading";
export default function DressStyle() {
  return (
    <div
      className={`${Styles.DressStyle} flex flex-col justify-evenly px-2 py-8 w-full xl:w-[1240px] pt-5 h-max lg:h-[866px] mx-auto rounded-[40px]  `}
      style={{ backgroundColor: "var(--light-gray)" }}
    >
      <Heading text="BROWSE BY dress STYLE" />

      <div
        className={`${Styles.wrapper} mt-5 w-full lg:w-[90%] lg:h-[70%] gap-2 lg:gap-5 mx-auto grid grid-cols-1 md:grid-cols-3 h-max md:grid-col-2 `}
      >
        <div className="div border-2 rounded-[20px] w-[310px] h-[190px] mx-auto md:w-full md:h-[290px]"></div>
        <div className="div border-2 rounded-[20px] w-[310px] h-[190px] mx-auto md:w-full md:h-[290px] col-span-2 "></div>
        <div className="div border-2 rounded-[20px] w-[310px] h-[190px] mx-auto md:w-full md:h-[290px] col-span-2 "></div>
        <div className="div border-2 rounded-[20px] w-[310px] h-[190px] mx-auto md:w-full md:h-[290px]"></div>
      </div>
    </div>
  );
}

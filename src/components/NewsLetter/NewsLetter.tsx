import React from "react";
import Styles from "./NewsLetter.module.css";
import Button from "../Button/Button";
export default function NewsLetter() {
  return (
    <div
      className={`${Styles.NewsLetter} !bg-black lg:w-[1020px] xl:w-[1240px] mt-52 md:mt-36 mx-auto rounded-[20px] flex flex-col sm:flex-row  md:px-[64px] py-[36px] px-3 justify-between gap-8 items-center text-white`}
      style={{ backgroundColor: "var(--foreground)" }}
    >
      <div className={`${Styles.heading} w-full `}>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>
      <div className="buttons w-full flex flex-col items-center justify-center gap-2 lg:gap-5">
        <div className="btn w-[100%] sm:w-[200px] lg:w-[350px] lg:h-[46px]">
          <Button text="Enter Email Address" dark_variant={false} />
        </div>
        <div className="btn w-[100%] sm:w-[200px]  lg:w-[350px] lg:h-[46px]">
          <Button text="Subscribe to NewLetter" dark_variant={false} />
        </div>
      </div>
    </div>
  );
}

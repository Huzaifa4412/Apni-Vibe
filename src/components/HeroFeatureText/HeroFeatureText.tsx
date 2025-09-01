
import React from "react";
import CountUp from "../CountUp";

const HeroFeatureText = (props: { text: string; number: string }) => {
  return (
    <div>
      <div className="number font-extrabold text-[18px]  md:text-[24px]">
        <CountUp
          from={0}
          to={props.number ? parseInt(props.number) : 0}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </div>
      <div className="quality text-[#000000]/60 text-[14px] font-medium">
        {props.text}
      </div>
    </div>
  );
};

export default HeroFeatureText;

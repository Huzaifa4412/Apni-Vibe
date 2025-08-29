import React from "react";

const HeroFeatureText = (props: { text: string; number: string }) => {
  return (
    <div>
      <div className="number font-extrabold text-[18px]  md:text-[24px]">
        {props.number}
      </div>
      <div className="quality text-[#000000]/60 text-[14px] font-medium">
        {props.text}
      </div>
    </div>
  );
};

export default HeroFeatureText;

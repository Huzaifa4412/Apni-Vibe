'use client'

import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
const RangeSlider = ({
  filterByPrice,
  highPrice,
}: {
  filterByPrice: (lowPrice: number, highPrice: number) => void;
  highPrice: number;
}) => {
  const [minValue, setMinValue] = useState<number>(200);
  const [maxValue, setMaxValue] = useState<number>(400);

  const handleInput = (e: { minValue: number; maxValue: number }) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-lg font-semibold text-gray-700">Select a Range</h1>
      <div className="relative w-full max-w-md !shadow-none">
        {/* Wrap slider with a styled div */}
        <MultiRangeSlider
          min={0}
          max={highPrice}
          minValue={0}
          maxValue={highPrice}
          onInput={handleInput}
          label={false}
          ruler={false}
          style={{
            border: "none",
            boxShadow: "none",
            backgroundColor: "white",
            padding: "15px 10px",
            width: "100%",
          }}
          barInnerColor="black"
          thumbLeftColor="black"
          thumbRightColor="black"
          barLeftColor="white"
          className="multi-range-slider"
          onChange={() => filterByPrice(minValue, maxValue)}
        />
        <style jsx>{`
          :global(.multi-range-slider .thumb::before) {
            background-color: black !important;
            box-shadow: none !important;
          }
          :global(.multi-range-slider .bar-left) {
            width: 25%;
            /* background-color: #f0f0f0; */
            border-radius: 10px 0px 0px 10px;
            box-shadow: inset 0px 0px 2px black;
            padding: 4px 0px;
          }
          :global(.multi-range-slider .bar-right) {
            width: 25%;
            background-color: #f0f0f0;
            border-radius: 0px 10px 10px 0px;
            box-shadow: inset 0px 0px 2px black;
          }
        `}</style>
      </div>
      <p className="text-gray-500">
        Selected range:{" "}
        <span className="font-bold">
          <br />Rs {minValue}
        </span>{" "}
        - <span className="font-bold">Rs {maxValue}</span>
      </p>
    </div>
  );
};

export default RangeSlider;

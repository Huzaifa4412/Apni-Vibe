import React from "react";
import Styles from "./Heading.module.css";

function Heading(props: { text: string; size?: number }) {
  return (
    <h2
      className={`${Styles.heading}  ${props.size ? `!text-[${props.size}px]` : ""
        } text-center sm:text-left w-full uppercase px-2`}
    >
      {props.text}
    </h2>
  );
}

export default Heading;

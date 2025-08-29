import React from "react";
import Styles from "./Button.module.css";

export default function Button(props: {
  text: string;
  dark_variant: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        props.dark_variant ? Styles.dark_variant : Styles.light_variant
      } ${Styles.button}`}
    >
      {props.text}
    </button>
  );
}

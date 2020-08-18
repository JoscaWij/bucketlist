import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import "./ButtonPlus.css";

function ButtonPlus({ onClick }) {
  return (
    <button className="buttonPlus" onClick={onClick}>
      <img src={buttonImgSrc} alt="Button that creates new element" />
    </button>
  );
}

export default ButtonPlus;

import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import "./ButtonPlus.css";

function ButtonPlus() {
  return (
    <button className="buttonPlus">
      <img src={buttonImgSrc} alt="Button that creates new element" />
    </button>
  );
}

export default ButtonPlus;

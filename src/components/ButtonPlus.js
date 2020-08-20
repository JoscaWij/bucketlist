import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import "./ButtonPlus.css";
import { Link } from "react-router-dom";

function ButtonPlus({ onClick }) {
  return (
    <Link to="/newtodo">
      <button className="buttonPlus" /* onClick={onClick} */>
        <img src={buttonImgSrc} alt="Button that creates new element" />
      </button>
    </Link>
  );
}

export default ButtonPlus;

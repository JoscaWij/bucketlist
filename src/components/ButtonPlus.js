import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ImgBtn = styled.button`
  border-style: none;
  background: none;
  position: relative;
  bottom: 2em;
  left: 50%;
  transform: translate(-50%);
`;

function ButtonPlus() {
  return (
    <ImgBtn>
      <Link to="/newtodo">
        <img src={buttonImgSrc} alt="Button that creates new element" />
      </Link>
    </ImgBtn>
  );
}

export default ButtonPlus;

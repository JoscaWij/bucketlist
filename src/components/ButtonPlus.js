import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ImgBtn = styled.button`
  border-style: none;
  background: none;
  position: relative;
  bottom: 1.5em;
  margin: 0 auto;
  width: 100%;
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

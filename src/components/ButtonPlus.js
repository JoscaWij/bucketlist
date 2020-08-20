import React from "react";
import buttonImgSrc from "../assets/plusBtn.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const imgBtn = styled.button`
  border-style: none;
  background: none;
`;

function ButtonPlus() {
  return (
    <Link to="/newtodo">
      <imgBtn className="buttonPlus">
        <img src={buttonImgSrc} alt="Button that creates new element" />
      </imgBtn>
    </Link>
  );
}

export default ButtonPlus;

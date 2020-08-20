import React from "react";
import styled from "@emotion/styled";

const StyledBtn = styled.button`
  background: var(--highlightColor);
  border-style: none;
  color: #fff;
  border-radius: 20px;
  padding: 0.3em 0.7em;
  text-decoration: none;
  width: 10em;
  text-align: center;
`;

function Button({ children }) {
  return <StyledBtn>{children}</StyledBtn>;
}

export default Button;

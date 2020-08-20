import React from "react";
import styled from "@emotion/styled";

const Container = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid lightgrey;
  text-decoration: none;

  *:first-child,
  *:last-child {
    margin: 0 2em;
  }

  h3 {
    margin: 0;
  }
`;

function ListItem({ children, href }) {
  return (
    <Container className="listItem" href={href}>
      {children}
    </Container>
  );
}

export default ListItem;

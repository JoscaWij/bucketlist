import React from "react";

function ListItem({ children, href }) {
  return <a href={href}>{children}</a>;
}

export default ListItem;

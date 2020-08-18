import React from "react";
import "./ListItem.css";

function ListItem({ children, href }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}

export default ListItem;

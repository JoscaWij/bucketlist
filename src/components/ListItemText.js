import React from "react";

function ListItemText({ title, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{date}</span>
    </div>
  );
}

export default ListItemText;

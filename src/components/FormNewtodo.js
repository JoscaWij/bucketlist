import React from "react";

function FormNewtodo({ onButtonClick }) {
  return (
    <form>
      <label>Title:</label>
      <input placeholder="Title"></input>
      <label>Date for task</label>
      <input placeholder="Date in TT.MM.JJ"></input>
      <button onClick={onButtonClick}>Create new task</button>
    </form>
  );
}

export default FormNewtodo;

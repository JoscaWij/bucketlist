import React from "react";
import { Link } from "react-router-dom";

function FormNewtodo({ onButtonClick }) {
  return (
    <div>
      <button>Back (ohne funct.)</button>
      <form>
        <label>Title:</label>
        <input placeholder="Title"></input>
        <label>Date for task</label>
        <input placeholder="Date in TT.MM.JJ"></input>
        <button onClick={onButtonClick}>
          <Link to="/todos">Create new task</Link>
        </button>
      </form>
    </div>
  );
}

export default FormNewtodo;

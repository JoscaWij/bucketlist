import React from "react";

function FormNewtodo() {
  return (
    <form>
      <label>Title:</label>
      <input placeholder="Title"></input>
      <label>Date for task</label>
      <input placeholder="Date in TT.MM.JJ"></input>
      <button>Create new task</button>
    </form>
  );
}

export default FormNewtodo;

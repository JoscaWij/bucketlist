import React from "react";

function FormNewtodo({ onTitleChange, onDateChange, handleOnSubmit }) {
  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Title:
        <input
          onChange={(event) => onTitleChange(event.target.value)}
          id="title"
          placeholder="Title"
        />
      </label>
      <label>
        Date for task
        <input
          onChange={(event) => onDateChange(event.target.value)}
          placeholder="Date in TT.MM.JJ"
        />
      </label>
      <input value="create new task" type="submit" />
    </form>
  );
}

export default FormNewtodo;

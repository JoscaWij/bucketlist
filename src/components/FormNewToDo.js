import React from "react";
import "./FormNewToDo.css";

function FormNewtodo({ onTitleChange, onDateChange, handleOnSubmit }) {
  return (
    <form className="form-newtodo" onSubmit={handleOnSubmit}>
      <label>
        What do you need to do?
        <input
          className="form-newtodo_input"
          onChange={(event) => onTitleChange(event.target.value)}
          id="title"
          placeholder="Title"
        />
      </label>
      <label>
        Date
        <input
          className="form-newtodo_input"
          onChange={(event) => onDateChange(event.target.value)}
          placeholder="Date"
        />
      </label>
      <input
        className="form-newtodo_submit"
        value="create new task"
        type="submit"
      />
    </form>
  );
}

export default FormNewtodo;

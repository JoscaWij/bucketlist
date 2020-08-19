import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createTodos } from "../api/todos";
import "./AddToDo.css";

function AddToDo() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  console.log(title, date);

  async function handleSubmit(event) {
    event.preventDefault();
    alert("created new task: " + title + " " + date);
    await createTodos({
      title,
      date,
    });
    setTitle("");
    setDate("");
  }

  return (
    <div className="addtodoPage">
      <button className="btn-goback" onClick={() => history.goBack()}>
        go back
      </button>
      <form className="form-newtodo" onSubmit={handleSubmit}>
        <label>
          What do you need to do?
          <input
            className="form-newtodo_input"
            onChange={(event) => setTitle(event.target.value)}
            id="title"
            placeholder="Title"
          />
        </label>
        <label>
          Date
          <input
            className="form-newtodo_input"
            onChange={(event) => setDate(event.target.value)}
            placeholder="Date"
          />
        </label>
        <input
          className="form-newtodo_submit"
          value="create new task"
          type="submit"
          disabled={!title || !date}
        />
      </form>
      <Link className="link-goto" to="/todos">
        Task overview
      </Link>
    </div>
  );
}

export default AddToDo;

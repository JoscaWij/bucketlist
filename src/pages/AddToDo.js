import React, { useState } from "react";
import FormNewToDo from "../components/FormNewToDo";
import { useHistory, Link } from "react-router-dom";
import { createTodos } from "../api/todos";

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
    <div>
      <button onClick={() => history.goBack()}>go back</button>
      <FormNewToDo
        onTitleChange={(query) => setTitle(query)}
        onDateChange={(query) => setDate(query)}
        handleOnSubmit={handleSubmit}
      ></FormNewToDo>
      <Link to="/todos">Task overview</Link>
    </div>
  );
}

export default AddToDo;

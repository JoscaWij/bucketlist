import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createTodos } from "../api/todos";
import "./AddToDo.css";

function AddToDo() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(false);
    setLoading(true);

    try {
      await createTodos({
        title,
        date,
      });
      setTitle("");
      setDate("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
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
            value={title}
            placeholder="Title"
          />
        </label>
        <label>
          Date
          <input
            className="form-newtodo_input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Date"
          />
        </label>
        <input
          className="form-newtodo_submit"
          value="create new task"
          type="submit"
          disabled={!title || !date || loading}
        />
      </form>
      {error && <p>Something went wrong. Please try again later</p>}
      <Link className="link-goto" to="/todos">
        Task overview
      </Link>
    </div>
  );
}

export default AddToDo;

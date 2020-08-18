import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormNewtodo({ onButtonClick }) {
  /*   let inputvalues;

  const titleinput = document.getElementById("title");
  console.log(titleinput); */
  /* const title = titleinput.value
  
  let forminput = {title: {title}, date: {date}}
  */
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>go back</button>
      <form /* onSubmit={(event) => console.log(event.target.values)} */>
        <label>Title:</label>
        <input id="title" placeholder="Title"></input>
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

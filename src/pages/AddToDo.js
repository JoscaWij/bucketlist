import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createTodos } from "../api/todos";
import Button from "../components/Button";
import styled from "@emotion/styled";

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

  const AddToDoPage = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
    padding: 0.4em;
  `;

  const SubmitBtn = styled.input`
    background: var(--highlightColor);
    border-style: none;
    color: #fff;
    border-radius: 20px;
    padding: 0.8em 1.4em;
    text-decoration: none;
    text-align: center;
    font-size: 1em;
    font-weight: bolder;
    transition: 0.5s;

    :hover {
      background: darkblue;
    }
  `;

  const FormInput = styled.input`
    width: 30em;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 1em 1.4em;
    text-decoration: none;
    text-align: center;
    font-size: 0.7em;
    margin: 1em;
  `;

  const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bolder;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const BtnLink = styled(Button)`
    Link {
      text-decoration: none;
      color: #fff;
    }
  `;

  return (
    <AddToDoPage className="addtodoPage">
      <Button onClick={() => history.goBack()}>go back</Button>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          What do you need to do?
          <FormInput
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            placeholder="Title"
          />
        </FormLabel>
        <FormLabel>
          Date
          <FormInput
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Date"
          />
        </FormLabel>
        <SubmitBtn
          value="create new task"
          type="submit"
          disabled={!title || !date || loading}
        />
      </Form>
      {error && <p>Something went wrong. Please try again later</p>}
      <BtnLink>
        <Link to="/todos">Task overview</Link>
      </BtnLink>
    </AddToDoPage>
  );
}

export default AddToDo;

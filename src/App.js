import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItemCheckbox from "./components/ListItemCheckbox";
import { getTodos, createTodos } from "./api/todos";
import ButtonPlus from "./components/ButtonPlus";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const existingtodos = await getTodos();
      setTodos(existingtodos);
    };
    getData();
  }, []);

  const handleClick = /* useEffect( */ () => {
    const createToDo = async () => {
      const newTodo = await createTodos();
      console.log(newTodo);
      setTodos(newTodo);
    };
    createToDo();
  }; /* [todos]); */

  return (
    <div className="app">
      <header className="app__header">
        <h2>Title</h2>
      </header>
      <main className="app__main">
        <List>
          {todos?.map((todo) => {
            return (
              <ListItem key={todo.id}>
                <ListItemIcon />
                <ListItemText title={todo.title} date={todo.date} />
                <ListItemCheckbox />
              </ListItem>
            );
          })}
        </List>
      </main>
      <footer className="app__footer">
        <ButtonPlus onClick={() => handleClick()} />
      </footer>
    </div>
  );
}

export default App;

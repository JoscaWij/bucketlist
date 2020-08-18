import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItemCheckbox from "./components/ListItemCheckbox";
import { getTodos } from "./api/todos";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    getData();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h2>Title</h2>
      </header>
      <main className="app__main">
        <List>
          <ListItem>
            <ListItemIcon />
            <ListItemText />
            <ListItemCheckbox />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Footer</footer>
    </div>
  );
}

export default App;

import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheckbox from "../components/ListItemCheckbox";
import { getTodos } from "../api/todos";
import React, { useState, useEffect } from "react";

function ToDos() {
  const [todos, setTodos] = useState(null);
  /*  const [forminput, setFormInput] = useState(null); */

  useEffect(() => {
    const getData = async () => {
      const existingtodos = await getTodos();
      setTodos(existingtodos);
    };
    getData();
  }, []);

  return (
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
  );
}

export default ToDos;

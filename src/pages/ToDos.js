import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import ListItemCheckbox from "../components/ListItemCheckbox";
import React from "react";
import { getTodos } from "../api/todos";
import useAsync from "../hook/useAsync";

function ToDos() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <>
      {error && <div>Something went wrong, try again 😅</div>}
      {loading && <div>I will check your to-do list for you</div>}
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
    </>
  );
}

export default ToDos;

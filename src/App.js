import "./App.css";
import React from "react";

import ButtonPlus from "./components/ButtonPlus";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ToDos from "./pages/ToDos";
import AddToDo from "./pages/AddToDo";
import { createTodos } from "./api/todos";

function App() {
  /*   const handleData = (input) => {
    const createToDo = async () => {
      const newTodo = await createTodos(input);
      console.log(newTodo);
      setTodos(newTodo);
    };
    createToDo();
  }; */

  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <h2>Title</h2>
        </header>
        <main className="app__main">
          <Switch>
            <Route path="/todos">
              <ToDos />
            </Route>
            <Route path="/newtodo">
              <AddToDo /* onSubmit={(input) => handleData(input)} */ />
            </Route>
            <Route path="/">
              <Redirect to="/todos" />
            </Route>
          </Switch>
        </main>
        <footer className="app__footer">
          <ButtonPlus />
        </footer>
      </div>
    </Router>
  );
}

export default App;

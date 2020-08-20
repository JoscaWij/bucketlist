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
import styled from "@emotion/styled";

function App() {
  const App = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  `;

  const Header = styled.header`
    background: var(--highlightColor);
    color: #fff;
    padding-left: 2em;
  `;

  const Footer = styled.footer`
    box-shadow: 0px -10px 20px #a3a3a3;
    padding-left: 2em;
  `;

  return (
    <Router>
      <App>
        <Header>
          <h2>To Do-Manager</h2>
        </Header>
        <main>
          <Switch>
            <Route path="/todos">
              <ToDos />
            </Route>
            <Route path="/newtodo">
              <AddToDo />
            </Route>
            <Route path="/">
              <Redirect to="/todos" />
            </Route>
          </Switch>
        </main>
        <Footer>
          <ButtonPlus />
        </Footer>
      </App>
    </Router>
  );
}

export default App;

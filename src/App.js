import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h2>Title</h2>
      </header>
      <main className="app__main">
        <List>
          <ListItem>
            <ListItemIcon />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Footer</footer>
    </div>
  );
}

export default App;

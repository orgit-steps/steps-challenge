import React from "react";
import "./App.css";
import { AddComment } from "./add-comment/AddComment";
import { Comments } from "./comments/Comments";

function App() {
  return (
    <div className="App">
      <div className="appTitle">Maayan's Challenge!</div>
      <AddComment />
      <Comments />
    </div>
  );
}

export default App;
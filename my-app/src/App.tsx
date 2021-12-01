import React, { useState } from "react";
import "./App.css";
import { AddComment } from "./add-comment/AddComment";
import { Comments } from "./comments/Comments";

function App() {
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);

  return (
    <div className="App">
      <div className="appTitle">Maayan's Challenge!</div>
      {
        isAddCommentOpen ? 
         <AddComment handleCloseForm={() => setIsAddCommentOpen(false)}/> : 
          <button onClick={() => setIsAddCommentOpen(true)}>Add Comment</button>
      }
      <Comments />
    </div>
  );
}

export default App;
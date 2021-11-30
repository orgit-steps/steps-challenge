import { useState } from "react";
import "./AddComment.css";
import { postComment } from "../api";

const emptyComment = { name: "", email: "", postId: 0, body: "" };

export const AddComment = () => {
  const [newComment, setNewComment] = useState(emptyComment);

  const isNewCommentValid = () => {
      return newComment.name !== "" && newComment.email !== "" && 
            newComment.body !== "" && newComment.postId > 0;
  }

  const submitForm = (event: any) => {
    event.preventDefault();

    if (!isNewCommentValid()) return;

    const id = Math.random();
    postComment({ ...newComment, id });
    setNewComment(emptyComment);
  };

  return (
    <form onSubmit={(event) => submitForm(event)}>
      <div className="formTitle">Add A New Comment</div>
      <label>
        Comment Name:
        <input
          className="newCommentInput"
          type="text"
          value={newComment.name}
          onChange={(event) =>
            setNewComment((prev) => {
              return { ...prev, name: event.target.value };
            })
          }
        />
      </label>
      <br />
      <label>
        Comment Content:
        <textarea
          value={newComment.body}
          onChange={(event) =>
            setNewComment((prev) => {
              return { ...prev, body: event.target.value };
            })
          }
        />
      </label>
      <br />
      <label>
        Related to post no.:
        <input
          className="newCommentInput"
          type="number"
          value={newComment.postId}
          onChange={(event) =>
            setNewComment((prev) => {
              return { ...prev, postId: Number(event.target.value) };
            })
          }
        />
      </label>
      <br />
      <label>
        Email:
        <input
          className="newCommentInput"
          type="email"
          value={newComment.email}
          onChange={(event) =>
            setNewComment((prev) => {
              return { ...prev, email: event.target.value };
            })
          }
        />
      </label>
      <input type="submit" value="send" className="submitBtn" />
    </form>
  );
};
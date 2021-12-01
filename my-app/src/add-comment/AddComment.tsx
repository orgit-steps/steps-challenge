import { useState } from "react";
import "./AddComment.css";
import { postComment } from "../api";

const MAX_ID = 100;
const MIN_ID = 1;
const EMPTY_COMMENT = { name: "", email: "", postId: 1, body: "" };

interface AddCommentProps {
    handleCloseForm: () => void;
};

export const AddComment = (props: AddCommentProps) => {
  const {handleCloseForm} = props;
  const [newComment, setNewComment] = useState(EMPTY_COMMENT);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const isNewCommentValid = () => {
      return newComment.name !== "" && newComment.email !== "" && 
            newComment.body !== "";
  }

  const submitForm = (event: any) => {
    event.preventDefault();

    if (!isNewCommentValid()) {
        setErrorMsg("One of the fields is empty or inccorect. Please fix it and try again!");
        return;
    };

    const id = Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID;
    postComment({ ...newComment, id });
    setNewComment(EMPTY_COMMENT);
    setErrorMsg(undefined);
    handleCloseForm();
  };

  const closeForm = (event: any) => {
    event.preventDefault();
    handleCloseForm();
  }

  return (
    <form onSubmit={submitForm}>
        <div className="header">
            <div className="formTitle">Add A New Comment</div>
            <button className="closeBtn" onClick={closeForm}>X</button>
        </div>
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
        className="newCommentInput"
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
          min="1"
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
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
    </form>
  );
};
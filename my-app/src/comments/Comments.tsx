import React, { useEffect, useState } from "react";
import { fetchComments } from "../api";
import { LoaderComponent } from "../LoaderComponent";
import { Comment } from "../types";
import "./Comments.css";

const NUMBER_COMMENTS_TO_LOAD = 20;

const SingleComment = (props: { comment: Comment }) => {
  const { comment } = props;

  return (
    <li className="comment">
      <div className="name">{comment.name}</div>
      <div className="commentContent">{comment.body}</div>
      <div className="email">by {comment.email}</div>
      <div className="postId">related to post no. {comment.postId}</div>
    </li>
  );
};

export const Comments = () => {
  const [counter, setCounter] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);

  const loadMoreComments = (index: number) => {
    fetchComments(index, NUMBER_COMMENTS_TO_LOAD).then((newComments) => {
      setComments((prev) => [...prev, ...newComments]);
      setCounter((prev) => prev + NUMBER_COMMENTS_TO_LOAD);
    });
  };

  useEffect(() => {
    loadMoreComments(0);
  }, []);

  return (
    <div className="content">
        {
            comments.length === 0 ? 
                <LoaderComponent type="Puff" color="#00BFFF" height={100} width={200}/> :
                <>
                    <ul className="comments">
                        {comments.map((comment) => {
                        return <SingleComment comment={comment} key={comment.id}/>;
                        })}
                    </ul>
                    <button className="loadBtn" onClick={() => loadMoreComments(counter)}>
                        See More Comments
                    </button>
                </>
      }
    </div>
  );
};
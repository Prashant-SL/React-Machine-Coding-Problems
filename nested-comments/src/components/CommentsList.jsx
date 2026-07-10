import React from "react";
import Comment from "./Comment";

const CommentsList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;

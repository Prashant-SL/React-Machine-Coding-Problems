import React, { useState } from "react";

const Comment = (props) => {
  const {
    comment,
    onAddReply,
    onDeleteReply,
    showReplies,
    setShowReplies,
    showReplyInput,
    setShowReplyInput,
  } = props;

  const { user, text, timestamp, id } = comment;

  const [replyText, setReplyText] = useState("");

  const handleChange = (text) => {
    setReplyText(text);
  };

  const showReplyBox = () => {
    setShowReplyInput({ ...showReplyInput, [id]: !showReplyInput[id] });
  };

  const handleAddReply = (commentId) => {
    showReplyBox();
  };

  const handleSubmit = (commentId) => {
    if (replyText.trim() === "") return;

    const newComment = {
      id: new Date(),
      parentId: comment.parentId,
      user: "New User",
      text: replyText,
      timestamp: "Just now",
      children: [],
    };

    onAddReply(newComment, commentId);
    setReplyText("");
    handleShowReplies();
  };

  const handleShowReplies = () => {
    setShowReplies({ ...showReplies, [id]: !showReplies[id] });
  };

  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "10px 0 10px 16px",
        marginBottom: "12px",
        backgroundColor: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontWeight: "600", color: "#333" }}>{user}</span>
        <span style={{ fontSize: "0.85rem", color: "#666" }}>{timestamp}</span>
      </div>
      <p style={{ margin: 0, lineHeight: "1.5", color: "#444" }}>{text}</p>

      <form onSubmit={(e) => e.preventDefault()}>
        {showReplyInput[id] && (
          <>
            <input
              value={replyText}
              placeholder="Add a reply"
              onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={() => handleSubmit(comment.id)}>Send</button>
          </>
        )}
      </form>
      <button onClick={() => handleAddReply(comment.id)}>Reply</button>
      <button onClick={() => onDeleteReply(comment.id)}>Delete</button>

      {comment?.children?.length > 0 && (
        <p style={{ cursor: "pointer" }} onClick={handleShowReplies}>
          {!showReplies[id] ? "Show" : "Hide"} {comment?.children?.length}
          &nbsp;replies
        </p>
      )}

      {comment?.children?.length > 0 &&
        showReplies[id] &&
        comment.children.map((nestedComment) => {
          return (
            <Comment
              key={nestedComment.id}
              comment={nestedComment}
              showReplies={showReplies}
              setShowReplies={setShowReplies}
              showReplyInput={showReplyInput}
              setShowReplyInput={setShowReplyInput}
              onAddReply={onAddReply}
              onDeleteReply={onDeleteReply}
            />
          );
        })}
    </div>
  );
};
export default Comment;

import { useEffect, useState } from "react";
import "./App.css";
import CommentsList from "./components/CommentsList";
import comments from "./data.json";

function App() {
  const [flattenedComments, setFlattenedComments] = useState([]);
  const [showReplies, setShowReplies] = useState({});
  const [showReplyInput, setShowReplyInput] = useState({});

  const flatComments = (comments) => {
    const rootComments = [...comments].filter(
      (comment) => comment.parentId == null,
    );

    const getChildren = (parentComment) => {
      const children = comments.filter(
        (comment) => comment.parentId === parentComment.id,
      );

      children.forEach((child) => getChildren(child));

      parentComment.children = children;
    };

    rootComments.forEach((rootComment) => getChildren(rootComment));
    setFlattenedComments(rootComments);
  };

  const handleAddReply = (newComment = "", targetCommentId = null) => {
    const getChildren = (comments) => {
      return comments.map((currentComment) => {
        if (currentComment.id === targetCommentId) {
          return {
            ...currentComment,
            children: [...currentComment.children, newComment],
          };
        } else if (currentComment?.children?.length > 0) {
          return {
            ...currentComment,
            children: getChildren(currentComment.children),
          };
        }
        return currentComment;
      });
    };

    const updatedComments = getChildren(flattenedComments);
    setFlattenedComments(updatedComments);
  };

  const handleDeleteComment = (targetCommentId) => {
    const deleteChildren = (currentComment, targetCommentId) => {
      if (currentComment.id === targetCommentId) {
        return false;
      } else if (currentComment?.children?.length > 0) {
        currentComment.children = currentComment?.children?.filter((cmt) =>
          deleteChildren(cmt, targetCommentId),
        );
      }
      return true;
    };

    const updatedComments = [...flattenedComments].filter((comment) =>
      deleteChildren(comment, targetCommentId),
    );

    setFlattenedComments(() => updatedComments);
  };

  useEffect(() => {
    flatComments(comments);
  }, [comments]);

  return (
    <>
      <CommentsList
        comments={flattenedComments}
        onAddReply={handleAddReply}
        onDeleteReply={handleDeleteComment}
        showReplies={showReplies}
        setShowReplies={setShowReplies}
        showReplyInput={showReplyInput}
        setShowReplyInput={setShowReplyInput}
      />
    </>
  );
}

export default App;

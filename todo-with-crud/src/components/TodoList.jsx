import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onEdit, onDelete = () => {} }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo todo={todo} onEdit={onEdit} onDelete={onDelete} index={index} />
      ))}
    </div>
  );
};

export default TodoList;

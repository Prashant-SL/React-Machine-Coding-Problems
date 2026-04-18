import React, { useState } from "react";

const Todo = ({ todo, index, onEdit, onDelete }) => {
  const [status, setStatus] = useState(null);
  return (
    <div>
      <span>{todo.title} &nbsp;&nbsp;&nbsp;</span>
      <select onChange={(e) => setStatus(e.target.value)} value={status || todo.status}>
        <optgroup>
          <option>In-Complete</option>
          <option>Done</option>
        </optgroup>
      </select>

      <div>
        <button onClick={() => onEdit(index, status)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;

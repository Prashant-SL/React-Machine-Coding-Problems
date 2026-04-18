import { useRef, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [currentEditingIndex, setCurrentEditingIndex] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "Clean dishes",
      status: "In-Complete",
    },
    {
      title: "Get Haircut",
      status: "Done",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    currentEditingIndex == null
      ? setTodos((prev) => [
          ...prev,
          { title: inputText, status: "In-Complete" },
        ])
      : setTodos((prev) => {
          return prev.map((task, index) => {
            if (index == currentEditingIndex) {
              return {
                ...task,
                title: inputText,
                status: newStatus
              };
            }
            return task;
          });
        });

    setInputText("");
    setCurrentEditingIndex(null);
  };

  const handleEdit = (index, status) => {
    setInputText(todos[index].title);
    setNewStatus(status);
    setCurrentEditingIndex(index);
  };

  const handleInput = (task) => {
    setInputText(task);
  };

  const handleDelete = (index) => {
    setTodos(() => [...todos].filter((_, idx) => idx != index));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          value={inputText}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Enter new task here"
        />
        <button onClick={addTodo}>
          {currentEditingIndex === null ? "Add Task" : "Update Task"}
        </button>
      </div>
      <TodoList
        todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;

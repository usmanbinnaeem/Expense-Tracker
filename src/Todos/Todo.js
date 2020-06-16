import React from "react";
import "./TodoList.css";
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="glow-on-hover" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button
          className="glow-on-hover delete"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;

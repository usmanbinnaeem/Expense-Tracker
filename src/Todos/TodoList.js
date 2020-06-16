import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Header from "./Header";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Todo list App",
      completed: false,
    },
    {
      text: "Todo list App",
      completed: false,
    },
    {
      text: "Todo list App",
      completed: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="TodoList">
      <Header />
      <div className="App">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};
export default TodoList;

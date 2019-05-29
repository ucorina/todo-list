import React from "react";
import "./App.css";
import AddTodo from "../../containers/AddTodo";
import TodoList from "../../containers/TodoList";

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

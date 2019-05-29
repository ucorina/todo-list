import React from "react";

const TodoList = ({ todoItems, onItemToggled, onItemDeleted }) => {
  return (
    <ul>
      {todoItems.map(todo => (
        <li onClick={() => onItemToggled(todo.id)}>
          {todo.text} - {todo.completed ? "Done!" : "Open"} -{" "}
          <button onClick={() => onItemDeleted(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

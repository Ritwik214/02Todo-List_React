// TodoItem.js
import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;

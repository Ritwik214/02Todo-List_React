// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;

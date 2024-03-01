// App.js
import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
    setNewTodoText("");
  };

  const handleToggle = (todoId) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleRemove = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      <form onSubmit={handleAddTodo}>
        <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;

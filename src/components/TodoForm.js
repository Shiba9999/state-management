// TodoForm.js
import React, { useContext, useState } from 'react';

import TodoContext from '../context/TodoContext';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = { id: Date.now(), text: newTodo };
      addTodo(todo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;

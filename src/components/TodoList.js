// TodoList.js
import React, { useContext } from 'react';

import TodoContext from '../context/TodoContext';

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext)

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {todos.map(todo => (
          <h3 key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

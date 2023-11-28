// TodoContext.js
import React, { createContext, useReducer, useContext } from 'react';
import TodoContext from './TodoContext';
import { initialState, todoReducer } from './Reducer';

// Define the initial state


// Create the context


// Create the provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const removeTodo = todoId => {
    dispatch({ type: 'REMOVE_TODO', payload: todoId });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};




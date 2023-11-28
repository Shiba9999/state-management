const initialState = {
    todos: [],
  };
  
  // Define the reducer function
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  export {initialState,todoReducer}


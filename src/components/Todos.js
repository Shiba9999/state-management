import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../context/TodoSlice";

const Todos = () => {
  const allTodos = useSelector((state) => state.allTodos);
  console.log(allTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>All Todos</h3>

      <ul>
        {allTodos.map((eachTodo) => (
          <li>
            <h4 key={eachTodo.id}>{eachTodo.text} </h4>
            <button onClick={()=>dispatch(deleteTodo(eachTodo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

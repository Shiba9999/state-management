import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContextProvider";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

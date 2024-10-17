import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="flex flex-col items-center lg:ml-10 mt-10">
      <CreateTodo refreshTodo={fetchTodo} />
      <Todos todos={todos} refreshTodo={fetchTodo} />
    </div>
  );
};

export default App;

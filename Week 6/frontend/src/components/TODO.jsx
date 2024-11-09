import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "go to study",
      description: "go to study today",
    },
    {
      id: 3,
      title: "go to sleep",
      description: "go to sleep before 11 ",
    },
  ]);
  let counter = 4;

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  };

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default App;

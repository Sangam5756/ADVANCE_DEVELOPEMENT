"use client";
import React, { useEffect, useState } from "react";
import TodoCard, { todo } from "./components/TodoCard";

const fetchTodo = async():Promise<todo[]> => {
  const response = await fetch("https://dummyjson.com/todos");

  const json = await response.json();

  return json.todos;
};
const page = async () => {
  const todo = await fetchTodo();
  return (
    <div className="flex flex-wrap gap-5">
      {todo?.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
};

export default page;

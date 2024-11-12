import React from "react";

export interface todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const TodoCard = ({ todo }: { todo: todo }) => {
  return (
    <div className="flex  w-44 h-44 border m-2">
      <div className=" ">
        <h1 className="text-center font-bold pt-3 ">{todo.id}</h1>
        <p className="text-wrap  text-center p-5">{todo.todo}</p>
        <p className="text-red-800 text-center">
          {todo.completed && "complete"}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;

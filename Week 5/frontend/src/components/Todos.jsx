import axios from "axios";
import { useEffect, useState } from "react";

const Todos = ({ todos, refreshTodo }) => {
  const update = async (_id) => {
    await axios.put("http://localhost:5000/completed", { id: _id });
    refreshTodo();
  };

  const deleteStatus = async (_id) => {
    await axios.delete("http://localhost:5000/delete/" + _id);
    refreshTodo();
  };

  return (
    <div className="flex flex-wrap justify-center mt-5 gap-4">
      {todos?.map((item) => (
        <div
          key={item._id}
          className="bg-slate-200 shadow-lg rounded-lg p-4 w-full max-w-xs"
        >
          <h1 className="font-bold text-lg">Title: {item?.title}</h1>
          <h2 className="font-semibold">Description: {item?.description}</h2>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => update(item._id)}
              className={`px-4 py-2 rounded-md ${
                item.completed ? "bg-green-400" : "bg-yellow-300"
              }`}
            >
              {item.completed ? "Completed" : "Mark as Completed"}
            </button>
            <button
              onClick={() => deleteStatus(item._id)}
              className="bg-red-400 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;

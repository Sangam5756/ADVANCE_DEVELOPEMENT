import { useState } from "react";
import axios from "axios";

const CreateTodo = ({ refreshTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/todo", {
        title,
        description,
      });
      alert("Todo added");
      setTitle("");
      setDescription("");
      refreshTodo();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5 w-full max-w-md">
      <input
        type="text"
        className="bg-slate-200 mt-2 px-2 rounded-md outline-none w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="bg-slate-200 mt-2 px-2 rounded-md outline-none w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 mt-5 rounded-md py-1 px-2 text-white w-full"
      >
        Add a Todo
      </button>
    </div>
  );
};

export default CreateTodo;

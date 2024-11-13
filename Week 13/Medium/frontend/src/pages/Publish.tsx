import axios from "axios";
import  { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Publish = () => {
  interface post {
    title: string;
    content: string;
  }

  const [post, setPost] = useState<post>({
    title: "",
    content: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);


  const navigate = useNavigate();
  const handlePublish = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.id) {
        navigate("/blogs");
        toast.success(response.data.message);
      }
      console.log(response);
    } catch (error) {
      alert("Error Publishing the post");
    }
  };

  return (
    <div className="flex justify-center max-w-screen-xl">
      <div className="w-full max-w-screen-md">
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="outline-none py-2 border rounded-md p-2  w-full"
            placeholder="title of post"
            onChange={(e) => {
              setPost((c) => ({
                ...c,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <textarea
            className=" w-full rounded-md outline-none border p-2 "
            rows={10}
            placeholder="Write Article"
            onChange={(e) => {
              setPost((c) => ({
                ...c,
                content: e.target.value,
              }));
            }}
          ></textarea>
        </div>
        <button
          onClick={handlePublish}
          type="button"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

export default Publish;

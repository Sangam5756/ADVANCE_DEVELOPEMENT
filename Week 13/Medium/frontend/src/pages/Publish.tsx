import axios from "axios";
import  { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Publish.css"
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
    <div className="post-container">
      <div className="post-form">
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Title of post"
            onChange={(e) => {
              setPost((c) => ({
                ...c,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div className="textarea-group">
          <textarea
            className="textarea-field"
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
          className="publish-btn"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

export default Publish;

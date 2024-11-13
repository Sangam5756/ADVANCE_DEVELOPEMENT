import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blogs {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blogs>();
  console.log(id);
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response.data.post) {
        setBlog(response.data.post);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { loading, blog };
};

export default useBlog;

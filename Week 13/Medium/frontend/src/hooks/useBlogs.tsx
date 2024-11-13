import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blogs{
  content: string,
  title:string,
  id: string
  author: {
    name: string
  }
}

const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response)
      setBlogs(response.data.post);
      setLoading(false);
    };

    fetchBlog();
  }, []);

  return { loading, blogs };
};

export default useBlogs;

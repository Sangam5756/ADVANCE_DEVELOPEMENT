import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import Shimmer from "../components/Shimmer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);
  if (loading)
    return (
      <div>
        <Shimmer />
      </div>
    );
  return (
    <div>
      <div className="flex justify-center">
        <div>
          {blogs.map((e) => (
            <BlogCard
              id={e.id}
              authorName={e?.author?.name || "Anonymous"}
              title={e?.title}
              content={e?.content}
              publishedDate={"07 Nov 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

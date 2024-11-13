import useBlog from "../hooks/useBlog";
import { useNavigate, useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Shimmer from "../components/Shimmer";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams();
  console.log(typeof(id))

  if(!id){
    return <Shimmer/>
  }
  const { loading, blog } = useBlog({ id: id });

  const token = localStorage.getItem("token");


  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
   
  }, []);
  if(!blog){
    return <Shimmer/>
  }
  return (
    <div className="w-full">
      {loading ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <FullBlog blog={blog} />
      )}
    </div>
  );
};

export default Blog;

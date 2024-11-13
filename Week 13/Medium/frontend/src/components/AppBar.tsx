import { useEffect } from "react";
import Avatar from "./Avatar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppBar = () => {
  const navigate = useNavigate();
  const token =localStorage.getItem("token")
  useEffect(()=>{
    if(!token){
      navigate("/signin")
    }
  },[token])

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center cursor-pointer">
          Medium
        </div>
      </Link>
    
      <div>
        
       {token && <div> <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button>
          </Link>

          <button
          onClick={()=>{
            localStorage.removeItem("token")
            navigate("/signin")
            toast.success("Logout Successfully")
          }}
            type="button"
            className="text-white bg-red-500 hover:bg-red-800  rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            logout
          </button>

        <Avatar name="sangam" size={"big"} />
        </div>       
        }
      </div>
    </div>
  );
};

export default AppBar;

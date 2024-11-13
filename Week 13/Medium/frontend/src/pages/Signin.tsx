import { useNavigate } from "react-router-dom";
import Auth from "../components/Auth";
import Label from "../components/Label";
import { useEffect } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/blogs");
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>

      <div className="hidden lg:block">
        <Label />
      </div>
    </div>
  );
};

export default Signin;

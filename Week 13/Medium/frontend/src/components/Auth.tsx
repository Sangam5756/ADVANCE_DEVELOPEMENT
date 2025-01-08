import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupInput } from "@sangam5756/medium-common";
import LabelInput from "./LabelInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import "./Auth.css";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const token = response.data.jwt;
      if (token) {
        localStorage.setItem("token", token);
        toast.success("Login Successfully");
        navigate("/blogs");
      }
    } catch (e) {
      console.log("error occured", e);
      alert("Error Occured");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="form-wrapper">
          <div className="header">
            <div className="title">Create an account</div>
            <div className="subtext">
              {type === "signin"
                ? "Don't Have an Account"
                : "Already have an account?"}
              <Link
                className="link"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="inputs">
            {type === "signup" && (
              <LabelInput
                name="name"
                placeholder="Enter Your username"
                onChange={(e) => {
                  setPostInputs((c) => ({ ...c, name: e.target.value }));
                }}
                label="Username"
              />
            )}
            <LabelInput
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, email: e.target.value }));
              }}
              label="Email"
            />
            <LabelInput
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPostInputs((c) => ({ ...c, password: e.target.value }));
              }}
              label="Password"
            />
            <button type="button" onClick={sendRequest} className="submit-btn">
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupInput } from "@sangam5756/medium-common";
import LabelInput from "./LabelInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";

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
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center ">
        <div className="flex flex-col gap-5">
          <div className="px-10">
            <div className="text-3xl font-bold">Create an account</div>

            <div className="text-slate-400">
              {type == "signin"
                ? "Don't Have an Account"
                : "Already have an account?"}
              <Link
                className="px-1 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          <div>
            {type === "signup" ? (
              <LabelInput
                name="name"
                placeholder="Enter Your username"
                onChange={(e) => {
                  setPostInputs((c) => ({ ...c, name: e.target.value }));
                }}
                label="Username"
              />
            ) : null}
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

            <button
              type="button"
              onClick={sendRequest}
              className="text-white w-full mt-7 bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type == "signup" ? "sign up" : "sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

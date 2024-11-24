import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http:localhost:5000/api/v1/user/signup",
        formData
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message || "Sign-up failed. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            name="firstName"
            onChange={handleChange}
            placeholder="John"
            label="First Name"
          />
          <InputBox
            name="lastName"
            onChange={handleChange}
            placeholder="Doe"
            label="Last Name"
          />
          <InputBox
            type={"email"}
            name="username"
            onChange={handleChange}
            placeholder="john@gmail.com"
            label="Email"
          />
          <InputBox
            name="password"
            onChange={handleChange}
            placeholder="123456"
            label="Password"
          />
        </div>

        <div className="pt-4">
          <Button onClick={handleSignUp} label="Sign up" />
        </div>
        {errorMessage && (
          <div className="bg-red-500 flex items-center justify-center p-2 rounded-lg">
            <span>{errorMessage}</span>
          </div>
        )}

        <BottomWarning
          label="Already have an account?"
          buttonText="Sign in"
          to="/signin"
        />
      </div>
    </div>
  );
};

export default Signup;

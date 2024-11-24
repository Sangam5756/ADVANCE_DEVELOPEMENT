import React, { useEffect } from "react";
import Appbar from "../components/Appbar";
import Users from "../components/Users";
import Balance from "../components/Balance";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Need to add auth check!
    if (!token) {
        navigate("/signin");
    }
}, [navigate]);

  return (
    <>
      <Appbar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Landing from "./components/Landing";

const App = () => {


  
  // const handleClick = ()=>{
  //   window.location.href = "/"
  // }

  // const dashboardRoute = ()=>{
  //   window.location.href = "/dashboard"
  // }

  return (
    <div>
      <BrowserRouter>
        <Approuter />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

//  useNavigate hook not work outside the browserRouter
const Approuter = () => {
  const navigate = useNavigate();

  const dashboardRoute = () => {
    navigate("/dashboard");
  };

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex gap-4">
        <button onClick={dashboardRoute}>dashboard</button>
        <button onClick={handleClick}>landing</button>
      </div>
    </div>
  );
};

export default App;

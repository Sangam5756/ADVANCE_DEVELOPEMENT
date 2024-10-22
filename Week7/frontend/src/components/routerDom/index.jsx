import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Landing = lazy(() => import("./components/Landing"));
const DashBoard = lazy(() => import("./components/DashBoard"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Approuter />

        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
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

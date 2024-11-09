import React from "react";

const App = () => {
  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <TextComponent2 />
      </CardWrapper>
      
    </div>
  );
};

const TextComponent = () => {
  return (
    <>
      <h1>Hi My Name Is Sangam Mundhe</h1>
    </>
  );
};
const TextComponent2 = () => {
  return (
    <>
      <h1>Hi My Name Is Sangam Mundhe</h1>
    </>
  );
};

const CardWrapper = ({ children }) => {
  return (
    <div className="border border-solid-black px-2 py-2 bg-slate-300 w-32 m-10 shadow-lg shadow-black ">
      {children}
    </div>
  );
};

export default App;

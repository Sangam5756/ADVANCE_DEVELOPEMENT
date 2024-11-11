import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="text-center font-bold p-4">20 % off For few days</div>
      {children}
    </>
  );
};

export default layout;

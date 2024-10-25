import React, { useContext, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

const App = () => {
  return (
    <div className="px-32   py-32 flex flex-col items-center justify-center">
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};


const Count = () => {
  console.log("count component");
  return (
    <div className="flex flex-col gap-5">
      <RenderCount />
      <Button />
    </div>
  );
};




const RenderCount = () => {
  const count = useRecoilValue(countAtom);
  return (
    <div className="flex  items-center justify-center">
      <p>{count}</p>
    </div>
  );
};



const Button = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrese
      </button>
    </div>
  );
};

export default App;

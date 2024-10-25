import React, { useContext, useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
  console.log("count component re-render");
  return (
    <div className="flex flex-col gap-5">
      <RenderCount />
      <Button />
    </div>
  );
};

const RenderCount = () => {
  const count = useRecoilValue(countAtom);
  console.log("Count re-render");
  return (
    <div className="flex  items-center justify-center">
      <p>{count}</p>
    </div>
  );
};

{
  /**
      when i using default usestate and importing count and setcount from useRecoilState
      and updating the count then it rerendering the button component
      but we dont need to rerender button component .
      
      How to Stop Rerendering it. so we can remove the count from component because when we are setting count
      it again rerendering because of the updated  count

      so now we only take setcount from useSetRecoilState
      but there is one problem.
      How To update count so we use function (prev) =>prev+1
      so it will take prev value then update it with new value.
      no need of count
      PROBLEM SOLVE
      NOW THE BUTTON IS NOT RERENDERING WHEN THE COUNT CHANGE

  
   */
}

const Button = () => {
  console.log("button component re-render....");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrese
      </button>
    </div>
  );
};

export default App;

import React, { memo, useContext, useState } from "react";
import { CountContext } from "./contex";

const App = () => {
  const [count, setCount] = useState(0);
  const [a, seta] = useState(0);
  return (
    <div className="px-32 py-32 flex flex-col items-center justify-center">
      {a}
      <button onClick={() => seta(a + 1)}>inc</button>
      <br />
      <br />
      <CountContext.Provider value={{ count, setCount }}>
        <Hello />
        <Count />
      </CountContext.Provider>
    </div>
  );
};

const Count = memo(() => {
  console.log("count component");
  return (
    <div className="flex flex-col gap-5">
      <RenderCount />
      <Button />
    </div>
  );
});

const Hello = memo(() => {
  console.log("hello render");
  return <div>sdsd</div>;
});

const RenderCount = memo(() => {
  console.log("renderCOunt");
  const { count } = useContext(CountContext);
  return <div className="flex items-center justify-center">{count}</div>;
});

const Button = memo(() => {
  console.log("Button component");
  const { setCount, count } = useContext(CountContext);
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
});

export default App;

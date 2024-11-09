import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const Callback = () => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);

  
  const a = useCallback(() => {
    console.log("hi there");
  }, [count]);



  return (
    <div className="px-32 py-20  bg-slate-800 text-white">
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <Demo a={a} />
    </div>
  );
};

const Demo = memo(({ a }) => {
  console.log("rerender");
  return <div>Hii there {a}</div>;
});

export default Callback;

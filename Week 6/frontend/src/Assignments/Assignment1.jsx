// USECALLBACK

import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const Assignment1 = () => {
  const [counter, setCounter] = useState(0);
  const [count, setcount] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
    console.log("increment called");
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
    console.log("decrement called");
  }, [counter]);

  // without use callback child always rerender
  // const increment = () => {
  //   setCounter(counter + 1);
  //   console.log("increment called");
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  //   console.log("decrement called");
  // };

  return (
    <div className="bg-neutral-900 px-20 flex flex-col items-center py-10 text-white">
      <p>{counter}</p>
      <button
        className="bg-red-500 text-white rounded-md px-2 py-1"
        onClick={() => setcount(count + 1)}
      >
        {count}
      </button>
      <CounterButton increment={increment} decrement={decrement} />
    </div>
  );
};

const CounterButton = memo(({ increment, decrement }) => {
  console.log("child render");
  return (
    <div className="px-20 py-20 flex  gap-6">
      <button
        className="bg-red-500 text-white rounded-md px-2 py-1"
        onClick={increment}
      >
        increment
      </button>
      <button
        className="bg-red-500 text-white rounded-md px-2 py-1"
        onClick={decrement}
      >
        decrement
      </button>
    </div>
  );
});

export default Assignment1;

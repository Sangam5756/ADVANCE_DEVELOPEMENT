

// USEMEMO

import React, { useEffect, useMemo, useState } from "react";

const Assignment2= () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  let expensive = useMemo(() => {
    let value = 1;
    for (let i = 1; i <= input; i++) {
      value = value * i;
    }
    console.log(value);
    return value;
  }, [input]);

  // let expensive = 1;
  // for(let i=1; i<=input;i++){
  //   expensive = expensive*i;
  // }
  // console.log(expensive)

  return (
    <div className="bg-neutral-900 px-20 flex flex-col items-center py-10 text-white">
      <div className="flex gap-10 mb-10">
        <input
          placeholder="Enter the Value to Calculate Factorial"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="text-black px-10 "
        />

        <p>
          the factorial of {input} is {expensive}
        </p>
      </div>

      <button
        className="bg-red-700 px-5 py-5 rounded"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>
    </div>
  );
};

export default Assignment2;

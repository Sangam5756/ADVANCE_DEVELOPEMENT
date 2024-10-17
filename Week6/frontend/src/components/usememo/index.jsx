import React, { memo, useEffect, useMemo, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);
  const [dark, setDark] = useState(false);
  const count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= input; i++) {
      console.log("count is called");
      count = count + i;
    }
    return count;
  }, [input]);

  return (
    <div className="px-32 py-20">
      <input
        placeholder="Sum from 1 to n"
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <p>
        sum from 1 to {input} is {count}
      </p>
      <br />
      <br />
      <div
        className={`w-72 h-72 ${dark ? "bg-black text-white" : "bg-red-500 "} `}
      >
        <button
          onClick={() => {
            setCounter(counter + 1);
            setDark(!dark);
          }}
        >
          Counter {counter}
        </button>
      </div>
    </div>
  );
};

export default App;

//  when e

import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 py-10 bg-slate-200 w-32 items-center justify-center mt-32">
      <button
        className="py-1 px-2 bg-red-600 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <p className="text-lg"> {count}</p>
    </div>
  );
};

export default UseState;

import React, { useEffect, useMemo, useRef, useState } from "react";

const Assignment3 = () => {
  const [input, setInput] = useState(0);
  const inputRef = useRef();
  

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-neutral-900 px-20 flex flex-col items-center py-10 text-white">
      <div className="flex gap-10 mb-10">
        <input
          placeholder="Enter the Value to Calculate Factorial"
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="text-black px-10 "
        />
        <button onClick={handleButtonClick}>Focus input</button>
      </div>
    </div>
  );
};

export default Assignment3;

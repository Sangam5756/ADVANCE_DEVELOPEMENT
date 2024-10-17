import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const Callback = () => {
  const [counter, setCounter] = useState(0);

  const inputFunction = useCallback(() => {
    // use for memoized the function  with all its logic keep as it is across all renders unless any dependency changed
    console.log("child clicked");
  }, []);

  return (
    <div className="px-32 py-20  bg-slate-800 text-white">
      <ButtonComponent inputFunction={inputFunction} />

      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
};

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={inputFunction}>button clicked</button>
    </div>
  );
});

export default Callback;

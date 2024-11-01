import React, { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const cached = []

  const handlechange = (e) => setSearch(e.target.value);
  useEffect(() => {
    const timer =setTimeout(() => {
      console.log(search);
    }, 500);

    return () => clearTimeout(timer)
  },[search]);

  return (
    <div className="p-32 bg-neutral-900 h-screen  text-white">
      search :
      <input
        className="bg-slate-600 px-2 rounded-md py-1 outline-none"
        type="text"
        onChange={handlechange}
        value={search}
      />
    </div>
  );
};

export default Search;

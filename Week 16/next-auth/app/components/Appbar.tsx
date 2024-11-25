"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
    const session = useSession()
  return (
    <div className="flex gap-5">
      <button className="bg-slate-300 px-2 py-1  m-2 rounded-md hover:bg-slate-500 hover:text-white" onClick={() => signIn()}>signin</button>
      <button className="bg-slate-300 px-2 py-1  m-2 rounded-md hover:bg-slate-500 hover:text-white" onClick={() => signOut()}>Logout</button>
      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;

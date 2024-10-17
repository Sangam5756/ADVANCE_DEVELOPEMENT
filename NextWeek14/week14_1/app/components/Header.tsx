import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-2 mx-2 rounded-md mb-2 bg-white border  shadow-md shadow-slate-400">
      <ul className="flex   justify-between gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>

        <li>About</li>

        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;

import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import Search from '../search/Search';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-black flex items-center justify-between px-4 fixed top-0 z-40 sm:px-6 ">
      <div className="flex items-center h-full w-40 sm:w-60 font-bold text-base sm:text-2xl text-white">
        <Link href="/">
          <h1 className="sm:text-2xl text-white">DENANIMELIST</h1>
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <Search />
      </div>
    </div>

  );
}

export default NavBar;

import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Search from '../search/Search';

const NavBar = () => {
  return (
    <>
    <div className="w-full h-20 bg-black flex justify-between gap-5">

         <div className="flex justify-center h-full w-60 font-bold text-lg">
         <h1 className="flex items-center text-white">DENANIMELIST</h1>
         </div>
       <Search/>
       </div>

    </>
  )
}

export default NavBar
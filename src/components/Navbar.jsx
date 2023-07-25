import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Lafsha <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full px-2 flex  items-center w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>

      {/* cart */}
      <button className="bg-black text-white hidden md:flex ite ms-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart{" "}
      </button>

      {/* Mobile */}
      <div className="bg-black"></div>
    </div>
  );
}

export default Navbar;
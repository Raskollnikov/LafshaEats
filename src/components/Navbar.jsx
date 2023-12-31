import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillHeart,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaUserFriends, FaGift, FaStar } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
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
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart{" "}
      </button>

      {/* Mobile */}
      {nav && (
        <div
          className="bg-black/80 fixed w-screen h-screen z-10 top-0  left-0 "
          onClick={() => setNav(!nav)}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />

        <h2 className="text-2xl p-4">
          Lafsha <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4  text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <AiFillHeart size={25} className="mr-4" /> Favorites
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <LiaWalletSolid size={25} className="mr-4" /> Wallet
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <BiSolidHelpCircle size={25} className="mr-4" /> Help
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <FaGift size={25} className="mr-4" /> Promotions
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <FaStar size={25} className="mr-4" /> Best One
            </li>

            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

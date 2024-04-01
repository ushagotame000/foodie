import React from "react";
import logo from "../../assets/logo.png.png";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-4xl font-bold mt-10 font-serif"
              >
                <img src={logo} alt="logo" className="w-16" />
                UCafe
              </a>
            </div>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal absolute inset-x-0 top-5 h-16 ml-72">
            <ul className="hidden sm:flex gap-4">
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="# "
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex item-center gap-3">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

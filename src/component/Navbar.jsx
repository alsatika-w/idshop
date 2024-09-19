import { useState } from "react";
import {
  IconWorld,
  IconShoppingCart,
  IconArrowNarrowLeft,
  IconBaselineDensityMedium,
} from "@tabler/icons-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="bg-white w-full mx-auto px-4">
        <div className="hidden md:flex justify-between items-center mt-2">
          <div className="flex space-x-4 ml-auto">
            {/* Flex container for Login button and Language selector */}
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center">
                {/* Icon inside select container */}
                <IconWorld className="absolute left-2 text-[#0A91AB] text-xl" />
                <select className="bg-transparent border border-[#AFB1B6] cursor-pointer rounded-md py-2 px-10 pl-10 text-gray-400 focus:outline-none">
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <button className="py-2 px-4 bg-transparent rounded-md text-[#0A91AB] hover:text-[#155a68]">
              Masuk
            </button>
            <button className="py-2 px-4 bg-[#0A91AB] text-white rounded-md hover:bg-[#155a68]">
              Daftar
            </button>
          </div>
        </div>
        {/*Baris kedua */}
        <div className="flex items-center justify-between h-24 border-b border-gray-300">
          {/* Logo */}
          <a href="#" className="items-center space-x-3 hidden md:flex">
            <img
              src={logo}
              alt="Logo"
              className="h-8"
              style={{ width: "171px", height: "54px" }}
            />
          </a>

          {/* Form Pencarian dan Ikon Keranjang */}
          <div className="hidden md:flex flex-1 items-center mx-4">
            <form className="relative flex-1">
              <input
                type="text"
                placeholder="Cari di idshop"
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 mt-2 mr-4 px-3 py-1 text-white text-sm bg-[#0A91AB] rounded-md"
              >
                Cari
              </button>
            </form>
            <IconShoppingCart
              className="text-2xl mx-4 cursor-pointer"
              style={{ color: "#0A91AB" }}
            />
          </div>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="md:hidden ml-4 flex cursor-pointer"
          >
            {nav ? (
              <div></div>
            ) : (
              <>
                <div className="md:hidden cursor-pointer flex items-center space-x-2">
                  <div className="flex flex-1 items-center justify-between space-x-2">
                    <form className="relative flex flex-1">
                      <input
                        type="text"
                        placeholder="Cari di idshop"
                        className="w-full py-1 px-2 rounded-md border border-gray-300 focus:outline-none"
                      />
                    </form>
                    <IconShoppingCart
                      className="text-2xl cursor-pointer"
                      style={{ color: "#0A91AB" }}
                    />
                    <IconBaselineDensityMedium
                      size={20}
                      style={{ color: "#0A91AB" }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full border-l border-gray-300 bg-white ease-in-out duration-500 z-50"
            : "fixed top-0 right-[-100%] w-[60%] h-full border-l border-gray-300 bg-white ease-in-out duration-500 z-50"
        }
      >
        {/* Logo */}
        <div className="flex justify-between mb-5">
          <a href="#" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-8"
              style={{ width: "95px", height: "24px" }}
            />
          </a>
          {/* Close Button */}
          <div className="flex items-center justify-end p-4">
            <IconArrowNarrowLeft
              size={20}
              onClick={handleNav}
              className="cursor-pointer text-[#0A91AB]"
            />
          </div>
        </div>
        {/* Mobile Icons and Buttons */}
        <div className="flex flex-col px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            {/* Icon inside select container */}
            <IconWorld className="absolute text-[#0A91AB] text-xs" />
            <select className="bg-white border border-[#AFB1B6] cursor-pointer rounded-md text-sm py-2 px-0 pl-10 text-gray-400 focus:outline-none">
              <option value="id" className="text-xs cursor-pointer">
                Bahasa Indonesia
              </option>
              <option value="en" className="text-xs cursor-pointer">
                English
              </option>
            </select>
          </div>
          <button className="py-2 px-4 mt-56 bg-[#0A91AB] text-white rounded-md hover:bg-[#155a68]">
            Daftar
          </button>
          <button className="py-2 px-4 bg-transparent rounded-md text-[#0A91AB] hover:text-[#155a68]">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

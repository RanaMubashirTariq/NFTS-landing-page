"use client";

import { useState } from "react";
import Link from "next/link";   // ✅ Next.js navigation
import { Menu, X } from "lucide-react";

type NavbarSectionProps = {
  onSignInClick: () => void;
  onSignUpClick: () => void;
};



export default function NavbarSection({ onSignInClick, onSignUpClick }: NavbarSectionProps ) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
            <div className="relative w-full ">
                   <div className="fixed top-0 left-0 z-50  backdrop-blur-sm w-full py-[22.5px] px-[120px] flex items-center justify-between max-[1370px]:px-[80px] max-[1100px]:px-[40px] max-[1000px]:px-[25px]">
      {/* Logo + Search */}
      <div className=" flex items-center justify-between h-[68.5px] max-[767px]:h-[40px] ">
      {/* Logo + Search */}
      <div className="flex items-center gap-[20px] h-full max-[1000px]:h-[35px] max-[767px]:gap-[10px] max-[767px]:w-[130px]">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[89.5px] h-full object-contain"
        />

        {/* Search with expanding input */}
        <div className="relative flex items-center ">
          {/* Search Icon */}
          <img
            src="/search.png"
            alt="Search"
            onClick={() => setShowSearch(!showSearch)}
            className="z-11 w-[41.25px] h-[41.25px] object-cover cursor-pointer transform transition-transform duration-300 hover:scale-90 max-[1000px]:w-[35px] max-[1000px]:h-[35px] max-[767px]:w-[30px] max-[767px]:h-[30px]"
          />

          {/* Expanding Input on click */}
          <input
            type="text"
            placeholder="Search..."
            className={`-ml-[40px] max-[400px]:-ml-[35px] border-none outline-none  rounded-[45px] transition-all duration-300 pr-3 pl-[50px] py-1 h-[41.25px]  bg-white/20 max-[400px]:bg-gray-500  text-white text-sm placeholder:text-white 
              ${showSearch ? "w-[180px] max-[400px]:w-[200px] max-[340px]:w-[180px] opacity-100" : "w-0 opacity-0"}
            `}
          />
        </div>
      </div>
    </div>


      {/* Desktop Menu */}
      <div className="flex justify-center items-center p-[15px] w-full max-w-[403px] max-[1000px]:hidden">
        <ul className="flex justify-between items-center gap-[22.5px] font-['Exo2'] text-[13.5px] leading-[15px] font-semibold text-white">
          <li>
            <Link href="#explore">Explore</Link>
          </li>
          <li>
            <Link href="#following">Following</Link>
          </li>
          <li>
            <Link href="#how-it-works">How it Works</Link>
          </li>
          <li>
            <Link href="#community">Community</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="flex w-full max-w-[270.75px] h-full items-center justify-between gap-[25.5px] max-[1000px]:hidden">
        <button  onClick={onSignInClick} className="text-white  cursor-pointer font-['Exo2'] text-[13.5px] font-bold leading-[15px]">
          Sign In
        </button>
        <button  onClick={onSignUpClick} className="rounded-[45px] cursor-pointer transform transition-transform duration-300 hover:scale-90 py-[11.25px] px-[23.25px] bg-[#def85a] hover:bg-[#d3f85a]/90 text-black font-['Exo2'] text-[12px] font-bold leading-[15px]">
          Create Account
        </button>
        <img
          src="/light-toggle.png"
          alt="Theme Toggle"
          className="w-[41.25px] h-[41.25px] object-cover cursor-pointer transform transition-transform duration-300 hover:scale-90"
        />
      </div>

      {/* Mobile Right Section (Light Toggle + Menu Toggle) */}
      <div className="hidden max-[1000px]:flex items-center gap-4 max-[767px]:gap-[10px]">
        <img
          src="/light-toggle.png"
          alt="Theme Toggle"
          className="w-[35px] h-[35px] object-cover cursor-pointer"
        />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="fixed right-0 top-[100px] bg-[#040914] flex flex-col items-center justify-center text-white z-50 max-[1000px]:flex max-[1000px]:w-[250px] max-[1000px]:h-[350px] max-[767px]:w-[200px] max-[767px]:h-[250px] rounded-[20px]">
          <ul className="flex flex-col items-center gap-6 font-['Exo2'] text-[18px] max-[767px]:text-[14px] max-[767px]:gap-[10px] font-semibold">
            <li>
              <Link href="#explore" onClick={() => setMenuOpen(false)}>
                Explore
              </Link>
            </li>
            <li>
              <Link href="#following" onClick={() => setMenuOpen(false)}>
                Following
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>
                How it Works
              </Link>
            </li>
            <li>
              <Link href="#community" onClick={() => setMenuOpen(false)}>
                Community
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-6 items-center">
<button
  onClick={() => {
    setMenuOpen(false); // close the menu
    onSignInClick();    // open modal
  }}
  className="text-white cursor-pointer bg-[#040914] font-['Exo2'] text-[15px] font-bold"
>
  Sign In
</button>
            <button   onClick={() => {
    setMenuOpen(false); // close the menu
    onSignUpClick();    // open modal
  }}  className="rounded-[45px] cursor-pointer py-[12px] px-[25px] bg-[#def85a] text-black font-['Exo2'] text-[14px] font-bold">
              Create Account
            </button>
          </div>
        </div>
      )}
    </div>
            </div>
  );
}

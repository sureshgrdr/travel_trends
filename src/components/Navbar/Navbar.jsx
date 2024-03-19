import React, { useState } from "react";
import { navMenu } from "../../assets/data/NavMenu";
import logo from "../../assets/images/Logo_png/logo-white.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaCaretDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { ResponsiveMenu } from "./ResponsiveMenu";

export const Navbar = () => {
  const [navState, setNavState] = useState(navMenu);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="fixed right-0 top-0 z-50 w-full bg-slate-500 ">
        <div className="container py-4">
          <div className="flex items-center justify-between text-sm">
            {/* Logo */}
            <Link to={"/"}>
              <img src={logo} style={{ maxHeight: 25 }} />
            </Link>

            {/* Links */}
            <ul className=" hidden gap-4 text-white md:flex lg:gap-6">
              <li>
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Tour" activeclassname="active">
                  Tour
                </NavLink>
              </li>
              <li>
                <NavLink to="/Activities" activeclassname="active">
                  Activities
                </NavLink>
              </li>
              <li>
                <NavLink to="/Pages" activeclassname="active">
                  Pages
                </NavLink>
              </li>
              <li className="group relative cursor-pointer">
                <span className="flex items-center gap-1">
                  Quick Links
                  <FaCaretDown className="group-hover:-rotate-180 " />
                </span>
                {/* Dropdown */}
                <ul className="absolute left-auto z-50 hidden w-[150px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
                  <li className="rounded-md p-2 hover:bg-slate-400">Link 1</li>
                  <li className="rounded-md p-2 hover:bg-slate-400">Link 2</li>
                  <li className="rounded-md p-2 hover:bg-slate-400">Link 3</li>
                </ul>
              </li>
            </ul>

            {/* login/signup */}
            <div className="hidden gap-1 md:flex ">
              <Button classType={`btn`}>Sign up</Button>
              <Button classType={`btn border`}>Log in</Button>
            </div>

            {/* HamburgerMenu */}
            <div className=" z-[999] block cursor-pointer text-white md:hidden">
              {showMenu ? (
                <IoMdClose size={30} onClick={() => setShowMenu(!showMenu)} />
              ) : (
                <HiMenu size={30} onClick={() => setShowMenu(!showMenu)} />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

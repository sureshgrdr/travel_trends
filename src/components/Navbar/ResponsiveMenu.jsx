import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { FaCaretDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/Logo_png/FavIcon.png";

export const ResponsiveMenu = ({ setShowMenu, showMenu }) => {
  return (
    <>
      {showMenu ? (
        <div
          className="fixed top-0  block h-full w-full bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
      ) : (
        ""
      )}

      {/* Links */}
      <nav
        className={`${showMenu ? "left-0" : "-left-[100%]"} jus fixed bottom-0 top-0 z-[999] flex h-full  flex-col items-center gap-5 rounded-r-2xl bg-white p-4 px-10 pt-10 shadow-lg md:hidden`}
      >
        <img src={logo} width={50} />
        <ul className=" my-10 flex flex-col  gap-4 text-black">
          <li>
            <NavLink
              to="/"
              activeclassname="active"
              onClick={() => setShowMenu(!showMenu)}
            >
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
              <FaCaretDown className="group-hover:-rotate-90 " />
            </span>
            {/* Dropdown */}
            <ul className="absolute left-[150px] top-0 z-50 hidden w-[150px] rounded-md bg-white p-2 text-black shadow-md group-hover:block">
              <li className="rounded-md p-2 hover:bg-slate-400">Link 1</li>
              <li className="rounded-md p-2 hover:bg-slate-400">Link 2</li>
              <li className="rounded-md p-2 hover:bg-slate-400">Link 3</li>
            </ul>
          </li>
        </ul>

        {/* login/signup */}
        <div className="flex flex-col gap-2 ">
          <Button classType={`btn text-black`}>Sign up</Button>
          <Button classType={`btn border text-black`}>Log in</Button>
        </div>
      </nav>
    </>
  );
};

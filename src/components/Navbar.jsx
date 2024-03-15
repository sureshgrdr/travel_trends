import React from "react";
import { navMenu } from "../assets/data/NavMenu";
import { useState } from "react";
import logo from "../assets/images/Logo_png/logo-no-background_White.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navState, setNavState] = useState(navMenu);
  return (
    <>
      <h1>NavBar</h1>
      {/* <Link to="/">Home</Link>
      <Link to="/Tour">Tour</Link>
      <Link to="/Contact">Contact</Link> */}
      {/* <div className="mx-auto w-2/3 py-4">
        <img src={logo} style={{ height: 25 }} />
      </div> */}
    </>
  );
};

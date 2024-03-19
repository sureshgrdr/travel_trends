import React from "react";
import bgImage from "../assets/images/Frame2.png";

const bgImgStyle = {
  backgroundImage: `url(${bgImage})`,
  height: "50vh",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export const Home = () => {
  return (
    <>
      <div className="relative ">
        {/* <img
          src={bgImage}
          className="absolute right-0 top-0 -z-10 h-[700] w-full object-cover"
        /> */}
        {/* <div style={bgImgStyle}></div> */}
      </div>
    </>
  );
};

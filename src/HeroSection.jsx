import { Navbar } from "./components/Navbar";
import bgImage from "./assets/images/Frame2.png";

const bgImgStyle = {
  backgroundImage: `url(${bgImage})`,
  height: "860px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export const HeroSection = () => {
  return (
    <>
      <div style={bgImgStyle}></div>
    </>
  );
};

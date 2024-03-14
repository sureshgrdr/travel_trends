import bgImage from "./assets/images/Frame.png";

const bgImgStyle = {
  backgroundImage: `url(${bgImage})`,
  height: "860px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export const HeroSection = () => {
  return (
    <>
      <div style={bgImgStyle}>
        <h1 className="text-4xl font-bold text-purple-800">Comming Soon...</h1>
      </div>
    </>
  );
};

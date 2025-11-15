import React from "react";
import DarkVeil from "../components/external/DarkVeil.jsx";
import SplitText from "../components/external/text-animation/SplitText.jsx";

const LandingPage = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="w-screen h-screen font-[font] relative">
      <DarkVeil />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative text-center">
            <SplitText
              text="Your Personal Vault"
              className="text-7xl text-white block"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text={"For\u00A0React\u00A0Components"}
              className="text-7xl text-white absolute left-1/2 top-full -translate-x-1/2 mt-0"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
      </div>
    </div>
  );
};

export default LandingPage;

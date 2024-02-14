import React from "react";

// components
import Navbar from "../../components/Navbar";
function Hero() {
  return (
    <div className="bg-HeroBg bg-cover">
        <Navbar />
      <div className="flex flex-col items-center justify-center 2xl:py-56 py-40">
        <div className="border-2 border-black rounded-full px-16 py-2">
          <h3>FusionApes Presents</h3>
        </div>
        <div>
          <h1 className="md:text-8xl text-4xl text-white font-bold pt-6">BACKED AI</h1>
        </div>
        <p className="text-white text-2xl font-semibold">AI Image Generator</p>
      </div>
    </div>
  );
}

export default Hero;

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-96px)] sm:w-[calc(100vw-50px)] mx-auto relative ">
      <Image src={"/hero.png"} fill objectFit="cover" alt="hero" />
    </div>
  );
};

export default Hero;

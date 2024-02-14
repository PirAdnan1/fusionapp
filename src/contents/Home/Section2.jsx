import React from "react";
import Image from "next/image";

// assest
import Backed from "@/assets/backed.png";
import People from "@/assets/people.png";

function Section2() {
  return (
    <div className="mx-4 lg:mx-0">
      <h1 className="text-center text-primary my-14 font-bold md:text-7xl text-3xl">Our Story</h1>
      <div className="flex flex-col md:flex-row items-center justify-center lg:gap-32 gap-16">
        <div className="relative">
          <Image src={Backed} width={400} />
          <Image
            src={People}
            width={200}
            className="absolute -bottom-8 md:-bottom-4 md:-right-10 border-2 border-white"
          />
        </div>
        <div>
          <h1 className="text-primary text-2xl ">The Journey of hustle</h1>
          <p className="max-w-[427px] mt-4">
            It is an AI image generator tool. With it, you can create stunning
            images of your products or ideas. It has a wide variety of templates
            and options to choose from, so you can create the perfect image for
            your product. You can preview your generated images before you
            download them, so you can see how they will look. It is very easy to
            use, and there is step-by-step guidance to help you create the best
            possible images.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;

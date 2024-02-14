import React from "react";
import Image from "next/image";

// componnets
import Card from "./Card";

// assets
import CardOne from "@/assets/cardone.png";
import CardTwo from "@/assets/cardtwo.png";
import CardThree from "@/assets/cardthree.png";

function Cards() {
  return (
    <div className="mt-32 text-center mx-4">
      <h1 className="md:text-6xl text-3xl font-bold text-primary">Best Creations</h1>
      <p>Here are some best people have created</p>
      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-14 gap-7 mt-20">
        <Card
          image={CardOne}
          created={"Created by"}
          person={"Mr. Jonny"}
          prompt={"prompt: describe your prompt here..."}
        />
        <Card
          image={CardTwo}
          created={"Created by"}
          person={"Mr. Jonny"}
          prompt={"prompt: describe your prompt here..."}
        />
        <Card
          image={CardThree}
          created={"Created by"}
          person={"Mr. Jonny"}
          prompt={"prompt: describe your prompt here..."}
        />
      </div>
      <div className="mt-12">
        <h4>Loved it? create yours</h4>
        <button className="bg-primary rounded-full px-24 py-2 font-bold mt-2">Log in</button>
      </div>
    </div>
  );
}

export default Cards;

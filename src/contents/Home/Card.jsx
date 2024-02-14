import React from "react";
import Image from "next/image";

function Card({ image, created, person, prompt }) {
  return (
    <div>
      <Image src={image} />
      <div className="bg-primary flex flex-col pb-3 items-center justify-center">
        <span className="text-xs">{created}</span>
        <h1 className="font-semibold">{person}</h1>
        <h2 className="font-semibold">{prompt}</h2>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function NewsCard({ image, categary, heading, description, readbutton }) {
  return (
    <div className="max-w-[400px]">
      <Image src={image} width={400} />
      <div className="bg-secondary px-6">
        <p className="text-white font-thin text-sm py-4">{categary}</p>
        <h1 className="text-primary font-semibold text-3xl">{heading}</h1>
        <p className="text-white/80 text-2xl mt-4">{description}</p>
        <div className="text-center py-3">
          <Link href="#" className="bg-primary px-3 py-1 rounded-full">
            {readbutton}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

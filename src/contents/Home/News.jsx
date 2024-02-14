import React from "react";

// components
import NewsCard from "./NewsCard";

// assest
import People from "@/assets/people.png";
import CardTwo from "@/assets/cardtwo.png";
import CardThree from "@/assets/cardthree.png";

function News() {
  return (
    <div className="mt-24 mx-4">
      <h1 className="text-primary md:text-7xl text-3xl text-center font-bold">Latest News</h1>
      <p className="mt-7 text-center">Get updated with our latest blogs</p>
      <div className="flex flex-col gap-10 md:flex-row mt-14 justify-center items-center">
        <NewsCard
          image={People}
          categary={"Category"}
          heading={"How AI has change the way of living"}
          description={
            "It is an AI image generator tool. With it, you can create stunning images of your products or ideas. "
          }
          readbutton={"Read Now"}
        />
        <NewsCard
          image={CardTwo}
          categary={"Category"}
          heading={"How AI has change the way of living"}
          description={
            "It is an AI image generator tool. With it, you can create stunning images of your products or ideas. "
          }
          readbutton={"Read Now"}
        />
        <NewsCard
          image={CardThree}
          categary={"Category"}
          heading={"How AI has change the way of living"}
          description={
            "It is an AI image generator tool. With it, you can create stunning images of your products or ideas. "
          }
          readbutton={"Read Now"}
        />
      </div>
    </div>
  );
}

export default News;

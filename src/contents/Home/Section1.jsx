import React from "react";

function Section1() {
  return (
    <div className="mx-4">
      <div className="flex flex-col items-center mt-12">
        <h1 className="md:text-4xl text-3xl font-bold text-primary">
          Text to Image AI Generator
        </h1>
        <p className="mt-3">Convert your words to imaginations</p>
      </div>
      <div className="flex justify-center mt-7">
        <form className="flex w-full max-w-[430px] justify-center">
          <input
            className="max-w-[420px] pl-6 w-full rounded-l-full outline-0 focus:outline-0 border border-primary"
            type="text"
            placeholder="Describe Your Imagination"
          />
          <input
            className="bg-primary text-black rounded-r-full font-bold px-4 py-2"
            type="submit"
            value="Generate"
          />
        </form>
      </div>
      <div className="max-w-[900px] mx-auto mt-9">
        <span>Prompt Suggestions</span>
        <div className="flex flex-col md:flex-row gap-8 mt-3">
          <div className="bg-primary py-2 max-w-[290px] w-full rounded-full pl-3">Suggestion here</div>
          <div className="bg-primary py-2 rounded-full w-full pl-3">Suggestion here</div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-3">
            <div className="bg-primary py-2 max-w-[630px] w-full rounded-full pl-3">Suggestion here</div>
            <div className="bg-primary py-2 max-w-[145px] pr-5 w-full rounded-full pl-2">Suggestion here</div>
            <div className="bg-primary py-2 max-w-[145px] pr-5 w-full rounded-full pl-2">Suggestion here</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

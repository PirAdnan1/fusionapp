import React from "react";
import Image from "next/image";

// components
import Container from "./Container";

// assests
import FooterImage from "@/assets/FooterImage.png";

function Footer() {
  return (
    <div className="bg-secondary mt-36">
      <Container>
        <div className="flex flex-col gap-9 md:gap-0 md:flex-row items-center justify-between text-white/90 py-9">
          <Image src={FooterImage} />
          <div className="flex flex-col md:flex-row items-start gap-14">
            <div className="flex flex-col gap-7">
              <h1 className="text-primary font-bold text-2xl">Heading</h1>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
            </div>
            <div className="flex flex-col gap-7">
              <h1 className="text-primary font-bold text-2xl">Heading</h1>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
            </div>
            <div className="flex flex-col gap-7">
              <h1 className="text-primary font-bold text-2xl">Heading</h1>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
        <p className="text-primary pb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea
          laborum...
        </p>
      </Container>
    </div>
  );
}

export default Footer;

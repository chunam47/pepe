import React from "react";
import BlockContent from "@components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <BlockContent className="pt-[286px] relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[60px] font-[400] leading-[73px] text-white text-center mb-8">
            The token that's
            <br />
            all about
          </h1>
          <Image
            alt=""
            src={img}
            className="absolute top-[137px] right-0 z-[-1]"
          />
          <h2 className="title-app mb-10">Lorem ipsum dolor sit amet</h2>
          <span className="text-[16px] leading-5 font-[400] text-white w-[460px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default HomeContainer;

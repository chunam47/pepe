import React from "react";
import BlockContent from "@components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <BlockContent className="pt-[286px] relative">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-[60px] font-[400] leading-[73px] text-white text-center mb-8">
            King Of Fud
            <br />
            Hands Of Destruction
          </h1>
          <Image
            alt=""
            src={img}
            className="absolute top-[-137px] right-0 z-[-1]"
          />
          <h2 className="title-app mb-10">First Ever MeMe about Justin Sun</h2>
          <span className="text-[16px] leading-5 font-[400] text-white w-[460px] text-center">
          $PPSUN is an AI-driven meme project that aims to promote truth-seeking and help the community gain free tickets to Justin's comedy show.
          </span>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default HomeContainer;

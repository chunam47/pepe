import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import imgContent from "@assets/images/pepetomomics.svg";

import Image from "next/image";

const Pepetomomics = () => {
  return (
    <React.Fragment>
      <BlockContent className="relative ">
        <div className="flex flex-col justify-center items-center mt-[276px] mb-[214px]">
          <Image
            alt=""
            src={img}
            className="absolute top-[-252px] left-0 z-[-1]"
          />
          <div className="flex flex-col justify-center">
            <h2 className="title-app mb-6 text-center">Pepetomomics</h2>
            <span className="text-white text-[30px] leading-9 font-[400] mb-[100px] text-center">
              Token Supply: 420,000,000,000,000
            </span>

            <Image alt="" src={imgContent} />
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default Pepetomomics;

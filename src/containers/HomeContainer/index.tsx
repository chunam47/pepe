import React from "react";
import BlockContent from "@components/BlockContent";
import img from "@assets/img/home.svg";
import imgRes from "@assets/img/bg-home-res.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <BlockContent className="pt-12 ">
        <div>home page</div>
      </BlockContent>
    </React.Fragment>
  );
};

export default HomeContainer;

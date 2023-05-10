import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";

const WelcomeToPepe = () => {
  return (
    <React.Fragment>
      <BlockContent className="relative">
        <div className="flex flex-col justify-center items-center relative">
          <Image
            alt=""
            src={img}
            className="absolute top-[-84px] right-0 z-[-1]"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="title-app mb-10">Welcome to Pepe</h2>
            <span className="text-[24px] leading-7 font-[400] text-white text-center w-[80%]">
              The token that's all about getting rekted!
            </span>
          </div>
          <div className="flex gap-14 mt-14 items-center">
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span className="text-[#ACF10E]">At REKT</span>{" "}
                  <span>
                    we believe that investing should be thrilling, not boring.
                  </span>
                  <br />
                  <br />
                  <span>
                    That's why we've created a token that's designed for people
                    who want to take risks, have fun, and maybe even get a
                    little bit rekted along the way.
                  </span>
                </div>
              </div>
            </div>
            <hr className="line-hr" />
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span>
                    So if you're tired of playing it safe and want to join the
                    craziest ride in the crypto world,
                  </span>
                  <span className="text-[#ACF10E]">
                    then Pepe is the token for you
                  </span>{" "}
                  <span>
                    . With us, you can your portfolio and embrace the chaos of
                    the market.
                  </span>
                </div>
              </div>
            </div>
            <hr className="line-hr" />
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span className="text-[#ACF10E]">Join the Pepe</span>{" "}
                  <span>
                    army today and REKTify you portfolio! Remember - it's not
                    about the destination, it's about the rekted journey.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default WelcomeToPepe;

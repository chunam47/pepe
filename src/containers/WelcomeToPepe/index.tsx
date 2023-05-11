import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";

const WelcomeToPepe = () => {
  return (
    <React.Fragment>
      <BlockContent className="relative">
        <div
          id="about-us"
          className="flex flex-col justify-center items-center relative"
        >
          <Image
            alt=""
            src={img}
            className="absolute top-[-84px] right-0 z-[-1]"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="title-app mb-10">Welcome to $PPSUN</h2>
            <span className="text-[24px] leading-7 font-[400] text-white text-center w-[80%]">
              First Ever MeMe about Justin Sun
            </span>
          </div>
          <div className="flex gap-14 mt-14 items-center">
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                  <span>
                    is an AI-driven meme project that aims to promote
                    truth-seeking and help the community gain free tickets to
                    Justin's comedy show.
                  </span>
                  <br />
                  <br />
                  <span></span>
                </div>
              </div>
            </div>
            <hr className="line-hr" />
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span>Through the</span>{" "}
                  <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                  <span>
                    token the community can enjoy moments of relaxation and
                    entertainment after a stressful workday.
                  </span>
                </div>
              </div>
            </div>
            <hr className="line-hr" />
            <div>
              <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                <div>
                  <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                  <span>
                    is a token created by the community, for the community, and
                    for Justin's comedy show.
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

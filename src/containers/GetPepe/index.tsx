import React from "react";
import BlockContent from "../../components/BlockContent";
import Image from "next/image";
import iconFire from "@assets/images/icon-fire.svg";
import img from "@assets/images/sun.svg";

const GetPepe = () => {
  return (
    <React.Fragment>
      <BlockContent className="relative ">
        <div className="mt-[282px] mb-[363px] relative">
          <Image
            alt=""
            src={img}
            className="absolute top-[-103px] left-0 z-[-1]"
          />
          <div className="w-[620px] flex flex-col justify-center items-center mt-[103px] p-8 mx-auto bg-[#0E2D25] rounded-[20px] border-[6px] border-[#ACF10E]">
            <h2 className="text-white font-[400] text-[24px] leading-[46px] mb-2">
              You get <span className="text-[#ACF10E]">Pepe now</span>
            </h2>
            <span className="text-[#73A095] font-[400] text-[13px] leading-[26px] w-[75%] text-center mb-6">
              A total of 84,000,000,000,000 PEPE tokens are now available to be
              claimed by those who have claimed the ARB airdrop. PEPE tokens
              that have not been claimed within
            </span>
            <div className="flex bg-[#26423A] rounded-xl px-5 py-2">
              <Image alt="" src={iconFire} />
              <span className="ml-4 text-[#ACF10E] font-[400] text-[16px] leading-[26px]">
                31 days will be burned
              </span>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center text-[#73A095] font-[400] leading-5 text-[14px] mt-6">
                <span>Claimed</span>
                <span>84,000,000,000,000</span>
              </div>
              <div className="w-full range-get-pepe">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="0"
                  className="w-full bg-[#26423A]"
                />
              </div>
            </div>
            <div className="flex gap-8 justify-evenly w-[90%] mt-14">
              <button className="bg-[#73A095] rounded-xl py-[10px] px-4 text-white text-[16px] leading-5">
                <span className="flex justify-center items-center text-center">
                  You didn't connect the wallet
                </span>
              </button>
              <button className="bg-[#59A895] rounded-xl py-[10px] px-4 text-white text-[16px] leading-5 border-[3px] border-[#ACF10E]">
                <span className="flex justify-center items-center text-center">
                  You didn't connect the wallet
                </span>
              </button>
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default GetPepe;

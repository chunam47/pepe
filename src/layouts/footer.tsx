import Image from "next/image";
import logo from "@assets/images/logo.svg";
import iconTweet from "@assets/images/button-tweet.png";
import iconTele from "@assets/images/button-tele.png";
import iconA from "@assets/images/button-a.png";
import React from "react";
import BlockContent from "../components/BlockContent";
// import BlockContent from "../components/BlockContent";
export default function Footer() {
  const data = [
    {
      title: "Aridrop",
      onclick: "#aridrop",
    },
    {
      title: "About Us",
      onclick: "#about-us",
    },
    {
      title: "Rektomomics",
      onclick: "#rektomomics",
    },
  ];

  const dataBottomIcon = [
    {
      title: "icon A",
      onclick: "#icona",
      src: iconA,
    },
    {
      title: "Telegram",
      onclick: "#telegram",
      src: iconTele,
    },
    {
      title: "Tweeter",
      onclick: "#tweeter",
      src: iconTweet,
    },
  ];
  return (
    <div className="footer bg-[#0e2d25] ">
      <BlockContent>
        <div className="content-footer w-full flex flex-row items-center justify-between py-8 ">
          <div className="flex flex-row gap-10">
            <Image alt="logo" src={logo} />
            <div className="text-[14px] text-[#EFFFCA] w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center justify-center gap-6">
              {data.map((item) => (
                <a
                  className=" cursor-pointer text-[#ECFF76] duration-300 hover:scale-105"
                  href={item.onclick}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              {dataBottomIcon.map((item) => (
                <a href={item.onclick}>
                  <Image
                    alt={item.title}
                    src={item.src}
                    className="scale-90 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlockContent>
    </div>
  );
}

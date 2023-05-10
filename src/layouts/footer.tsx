import Image from "next/image";
import React from "react";
import BlockContent from "../components/BlockContent";
export default function Footer() {
  const data = [{}];
  return (
    <div className="footer">
      <div className="content-footer bg-[#0e2d25]">
        <BlockContent className="flex justify-around pt-14 pb-20 content-footer__content items-center">
          <div>
            <Image src="" alt="" />
          </div>
          <div className="flex gap-16 flex-wrap content-footer__content--item">
            {data.map((item, index) => (
              <></>
            ))}
            <div></div>
          </div>
        </BlockContent>
      </div>
    </div>
  );
}

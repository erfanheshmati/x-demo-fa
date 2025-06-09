import React from "react";
import CustomImage from "./CustomImage";

export default function Tags() {
  return (
    <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-4">
      <h2 className="text-xl font-bold text-textGrayLight">
        چیزهایی که دارد رخ می دهد
      </h2>
      {/* 1 */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">جاوااسکریپت</span>
          <CustomImage path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h3 className="text-textGrayLight font-bold">React.js</h3>
        <span className="text-textGray text-sm">20 هزار پست</span>
      </div>
      {/* 2 */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">جاوااسکریپت</span>
          <CustomImage path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h3 className="text-textGrayLight font-bold">React.js</h3>
        <span className="text-textGray text-sm">20 هزار پست</span>
      </div>
      {/* 3 */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">جاوااسکریپت</span>
          <CustomImage path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
        <h3 className="text-textGrayLight font-bold">React.js</h3>
        <span className="text-textGray text-sm">20 هزار پست</span>
      </div>
    </div>
  );
}

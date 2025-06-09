import React from "react";
import Search from "./Search";
import Tags from "./Tags";
import Recommendations from "./Recommendations";
import Link from "next/link";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-4 pt-4 sticky top-0 h-max">
      <Search />
      <Tags />
      <Recommendations />

      {/* Footer */}
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">شرایط استفاده</Link>
        <Link href="/">سیاست های مربوط به حریم شخصی</Link>
        <Link href="/">سیاست کوکی ها</Link>
        <Link href="/">دسترسی پذیری</Link>
        <Link href="/">اطلاعات آگهی ها</Link>
        <Link href="/">بیشتر</Link>
        <span>© 2025</span>
      </div>
    </div>
  );
}

import CustomImage from "@/components/CustomImage";
import Feed from "@/components/Feed";
import Link from "next/link";

export default function UserPage() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/10">
        <Link href="/">
          <CustomImage
            path="icons/back.svg"
            alt="Back"
            w={24}
            h={24}
            className="rotate-180"
          />
        </Link>
        <h1 className="font-bold text-lg">Erfan Heshmati</h1>
      </div>

      {/* Info */}
      <div className="">
        {/* Avatar & Cover */}
        <div className="relative w-full">
          {/* Cover */}
          <div className="w-full aspect-[3/1] relative">
            <div className="w-full h-52 bg-gray-500"></div>
          </div>
          {/* Avatar */}
          <div className="aspect-square absolute right-4 -translate-y-1/2 rounded-full">
            <div className="flex items-center justify-center relative w-28 h-28 border-4 border-black rounded-full overflow-hidden bg-blue-600 cursor-pointer hover:bg-blue-500 effect">
              E
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <CustomImage path="icons/more.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <CustomImage path="icons/explore.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
            <CustomImage path="icons/message.svg" alt="" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            دنبال کردن
          </button>
        </div>

        {/* اطلاعات کاربر */}
        <div className="p-4 flex flex-col items-start gap-2">
          {/* نام و کاربری و ایدی */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl text-right font-bold">Erfan Heshmati</h2>
            <span className="text-sm text-right text-textGray" dir="ltr">
              @erfanheshmati
            </span>
          </div>
          <p>Erfan Heshmati Youtube Channel</p>
          {/* شغل موقعیت مکانی تاریخ */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <CustomImage path="icons/userLocation.svg" alt="" w={20} h={20} />
              <span>IRAN</span>
            </div>
            <div className="flex items-center gap-2">
              <CustomImage path="icons/date.svg" alt="" w={20} h={20} />
              <span>تاریخ پیوستن 21 آوریل</span>
            </div>
          </div>
          {/* امار دنبال شوندگان و دنبال کنندگان */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">دنبال کنندگان</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">دنبال شوندگان</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <Feed />
    </div>
  );
}

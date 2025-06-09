import Link from "next/link";
import CustomImage from "./CustomImage";

const menuList = [
  {
    id: 1,
    name: "خانه",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "کاوش",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "آگاه‌سازی‌ها",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "پیام‌ها",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "نشانک‌ها",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "شغل‌ها",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "انجمن‌ها",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "نمایه",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "بیشتر",
    link: "/",
    icon: "more.svg",
  },
];

export default function RightBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Navigation */}
      <div className="flex flex-col items-center 2xl:items-start gap-4 text-lg">
        {/* Logo */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#141414]">
          <CustomImage path="icons/logo.svg" alt="X Logo" w={24} h={24} />
        </Link>
        {/* Menu List */}
        <div className="flex flex-col gap-2 w-full">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center justify-center 2xl:justify-start gap-4 p-2 rounded-full hover:bg-[#141414] effect"
            >
              <CustomImage
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden 2xl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Post Button */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center 2xl:hidden hover:bg-gray-200 effect"
        >
          <CustomImage path={"icons/post.svg"} alt="New Post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden 2xl:flex items-center justify-center w-full py-2 px-20 bg-white text-black rounded-full font-bold hover:bg-gray-200 effect"
        >
          پست کردن
        </Link>
      </div>

      {/* Account */}
      <div className="flex items-center justify-between p-2 rounded-full hover:bg-[#141414] effect cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center relative w-10 h-10 rounded-full overflow-hidden bg-green-700">
            E
          </div>
          <div className="hidden 2xl:flex flex-col">
            <span className="font-bold">Erfan Heshmati</span>
            <span className="text-textGray">@ErfanHeshmati</span>
          </div>
        </div>
        <div className="hidden 2xl:block font-bold">...</div>
      </div>
    </div>
  );
}

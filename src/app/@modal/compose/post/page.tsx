"use client";

import CustomImage from "@/components/CustomImage";
import { useRouter } from "next/navigation";

export default function PostModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="absolute w-full h-screen top-0 right-0 z-20 bg-white/20 flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div onClick={closeModal} className="cursor-pointer">
            X
          </div>
          <div className="text-iconBlue font-bold">پیش نویس ها</div>
        </div>
        {/* Content */}
        <div className="py-8 flex gap-4">
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <CustomImage
              path="general/avatar.png"
              alt="User Avatar"
              w={100}
              h={100}
            />
          </div>
          {/* Input */}
          <input
            type="text"
            placeholder="چه خبر؟!"
            className="flex-1 bg-transparent outline-none text-lg"
          />
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex items-center gap-4 flex-wrap">
            <CustomImage
              path="icons/image.svg"
              alt="icon"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="icons/poll.svg"
              alt="icon"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="icons/emoji.svg"
              alt="icon"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <CustomImage
              path="icons/schedule.svg"
              alt="icon"
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-4 text-black bg-white rounded-full font-bold cursor-pointer hover:bg-white/80 transition-all duration-300 ease-in-out">
            پست کردن
          </button>
        </div>
      </div>
    </div>
  );
}

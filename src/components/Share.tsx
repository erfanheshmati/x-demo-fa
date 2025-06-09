"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import CustomImage from "./CustomImage";
import { shareAction } from "@/actions";
import Image from "next/image";
import ImageEditor from "./ImageEditor";

export default function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const previewUrl = media ? URL.createObjectURL(media) : null;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle file change on input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  // Auto-resize textarea on input
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  };

  // Initialize textarea height on mount
  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  return (
    <form
      action={(formData) => shareAction(formData, settings)}
      className="p-4 flex gap-4"
    >
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full">
        <CustomImage
          path="general/avatar.png"
          alt="User Avatar"
          w={100}
          h={100}
        />
      </div>

      {/* The rest of ... */}
      <div className="flex-1 flex flex-col gap-4">
        <textarea
          ref={textareaRef}
          name="description"
          placeholder="چه خبر؟!"
          className="focus:outline-none pt-2 resize-none overflow-hidden"
          onInput={adjustTextareaHeight}
        ></textarea>

        {/* Image Preview */}
        {media?.type.includes("image") && previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewUrl}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              onClick={() => setEditorOpen(true)}
              className="absolute top-2 right-2 bg-black/50 text-white py-2 px-4 rounded-full font-bold text-sm cursor-pointer hover:bg-black/80 effect"
            >
              ویرایش
            </div>
            <button
              onClick={() => setMedia(null)}
              className="flex items-center justify-center absolute top-2 left-2 bg-black/50 text-white w-8 h-8 rounded-full cursor-pointer hover:bg-black/80 effect"
            >
              X
            </button>
          </div>
        )}

        {media?.type.includes("video") && previewUrl && (
          <div className="relative">
            <video src={previewUrl} controls />
            <button
              onClick={() => setMedia(null)}
              className="flex items-center justify-center absolute top-2 left-2 bg-black/50 text-white w-8 h-8 rounded-full cursor-pointer hover:bg-black/80 effect"
            >
              X
            </button>
          </div>
        )}

        {editorOpen && previewUrl ? (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        ) : null}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="file">
              <CustomImage
                path="icons/image.svg"
                alt="icon"
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <CustomImage
              path="icons/gif.svg"
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
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full px-4 py-2 hover:bg-gray-200 effect cursor-pointer"
          >
            پست کردن
          </button>
        </div>
      </div>
    </form>
  );
}

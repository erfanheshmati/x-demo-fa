import CustomImage from "./CustomImage";

export default function PostInfo() {
  return (
    <div className="relative cursor-pointer w-4 h-4">
      <CustomImage path="icons/infoMore.svg" alt="" w={16} h={16} />
    </div>
  );
}

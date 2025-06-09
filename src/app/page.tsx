import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-textGray">
        <Link
          href=""
          className="flex items-center justify-center pt-4 w-1/2 hover:bg-[#141414] relative"
        >
          <span className="text-white font-bold pb-4">برای شما</span>
          <span className="absolute -bottom-0.5 bg-iconBlue rounded-full w-full h-1"></span>
        </Link>
        <Link
          href=""
          className="flex items-center justify-center p-3 w-1/2 hover:bg-[#141414]"
        >
          <span className="">دنبال شده</span>
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}

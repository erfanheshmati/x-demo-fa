export default function Recommendations() {
  return (
    <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-4">
      {/* User Card 1 */}
      <div className="flex justify-between items-center">
        {/* Account Info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center relative w-10 h-10 rounded-full overflow-hidden bg-blue-500">
            E
          </div>
          <div>
            <h2 className="font-bold">Erfan Heshmati</h2>
            <span className="text-textGray text-sm" dir="ltr">
              @ErfanHeshmati
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center py-2 px-4 bg-white text-black rounded-full font-bold text-sm cursor-pointer hover:bg-gray-200 effect">
          دنبال کردن
        </button>
      </div>

      {/* User Card 2 */}
      <div className="flex justify-between items-center">
        {/* Account Info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center relative w-10 h-10 rounded-full overflow-hidden bg-cyan-500">
            E
          </div>
          <div>
            <h2 className="font-bold">Erfan Heshmati</h2>
            <span className="text-textGray text-sm" dir="ltr">
              @ErfanHeshmati
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center py-2 px-4 bg-white text-black rounded-full font-bold text-sm cursor-pointer hover:bg-gray-200 effect">
          دنبال کردن
        </button>
      </div>

      {/* User Card 3 */}
      <div className="flex justify-between items-center">
        {/* Account Info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center relative w-10 h-10 rounded-full overflow-hidden bg-purple-500">
            E
          </div>
          <div>
            <h2 className="font-bold">Erfan Heshmati</h2>
            <span className="text-textGray text-sm" dir="ltr">
              @ErfanHeshmati
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center py-2 px-4 bg-white text-black rounded-full font-bold text-sm cursor-pointer hover:bg-gray-200 effect">
          دنبال کردن
        </button>
      </div>
    </div>
  );
}

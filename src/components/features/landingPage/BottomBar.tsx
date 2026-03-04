

const BottomBar = () => {
  return (
    <>
      <div className="bg-[#232B33] border-t border-gray-800 py-10 slider-container">
        <div className="flex gap-12 justify-between text-gray-500 text-2xl overflow-x-hidden">
          {[
            "MTracker",
            "Mitlas",
            "MyVamsnet",
            "Cozaipay",
            "AngyCare",
            "Mtracker",
            "MyVamsnet",
          ].map((item, i) => (
            <span key={i} className="hover:text-lime-400 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default BottomBar



const BottomBar = () => {
  const items = [
    "MTracker",
    "Mitlas",
    "MyVamsnet",
    "Cozaipay",
    "AngyCare",
    "Mtracker",
    "MyVamsnet",
  ];

  return (
    <>
      <div className="bg-[#232B33] border-t border-gray-800 py-10 slider-container overflow-hidden">
        <div className="slider-track text-gray-500 text-2xl">
          {items.concat(items).map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="slider-item hover:text-lime-400 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomBar;

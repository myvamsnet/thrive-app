import Marquee from "react-fast-marquee";

const BottomBar = () => {
  const items = [
    "MTracker",
    "Mitlas",
    "MyVamsnet",
    "Cozaipay",
    "AngyCare",
    "Mtracker",
    "MyVamsnet",
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
        <Marquee gradient={false} speed={50}>
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
        </Marquee>
      </div>
    </>
  );
};

export default BottomBar;

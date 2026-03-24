

const Portfolio = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Top Small Label */}
        <p className="text-xl leading-8 tracking-[0%] normal uppercase mb-4 text-gray-400">
          Proven Model
        </p>

        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  mb-14">
          <h2 className="text-[44px] md:text-[28px] font-bold text-white leading-16 w-[709px]">
            Everything you need to launch a{" "}
            <span className="text-primary">profitable</span> and{" "}
            <span className="text-primary">thriving</span> product.
          </h2>

          <p className="text-gray-400 lg:text-xl text-base">
            Our ultimate goal is your success!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio

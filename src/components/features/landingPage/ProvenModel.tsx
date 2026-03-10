import { provenModelData } from "@/components/constant/provenModelData";
import ProvenModelCards from "./ProvenModelCards";
import { Flip, Zoom } from "react-awesome-reveal";

const ProvenModel = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper py-39 px-4">
        {/* Top Small Label */}
        <p className="text-xl leading-8 tracking-[0%] normal uppercase mb-4 text-gray-400">
          Proven Model
        </p>

        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  mb-14">
          <h2 className="text-[44px] md:text-[28px] font-bold text-white leading-16 lg:w-177.25 md:w-85.75">
            Everything you need to launch a{" "}
            <span className="text-primary">profitable</span> and{" "}
            <span className="text-primary">thriving</span> product.
          </h2>

          <p className="text-gray-400 text-xl">
            Our ultimate goal is your success!
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <Flip direction="horizontal">
            {provenModelData.map((card, index) => (
              <div key={index}>
                <ProvenModelCards
                  image={card.image}
                  title={card.title}
                  items={card.items}
                />
              </div>
            ))}
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default ProvenModel;

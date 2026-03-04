import ProvenModelCards from "./ProvenModelCards";
import { Rocket, TrendingUp, LayoutGrid } from "lucide-react";

const ProvenModel = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper py-39">
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

          <p className="text-gray-400 text-xl">
            Our ultimate goal is your success!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <ProvenModelCards
            image="/images/CodesandboxLogo.svg"
            title="Product Clarity"
            items={[
              "Business validation",
              "Brand strategy",
              "Revenue strategy",
              "MVP blueprint",
            ]}
          />

          <ProvenModelCards
            image="/images/RocketLaunch.svg"
            title="Product Launch"
            items={[
              "Brand identity",
              "Design system",
              "UI/UX design",
              "MVP launch",
            ]}
          />

          <ProvenModelCards
            image="/images/ArrowsOut.svg"
            title="Product Growth"
            items={[
              "Distribution system",
              "Marketing blueprint",
              "MVP tracking",
              "Sales system",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProvenModel;

import { Bounce } from "react-awesome-reveal";
import Footer from "./layouts/Footer";


const LaunchThriving = () => {
  return (
    <section className="bg-secondary  pt-17 px-4">
      <Bounce>
        {/* Background Card */}
        <div className="wrapper  bg-[url('/images/launch-image.svg')] bg-cover bg-center bg-no-repeat rounded-2xl">
          {/* Content */}
          <div className="text-center py-20 px-6 md:px-16">
            {/* Heading */}
            <h1 className="text-[28px] md:text-[44px] font-bold text-white leading-[90px">
              Launch a <span className="text-tertiary">3triving</span> Product
              Today!
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-gray-300 text-base md:text-xl mx-auto leading-8 w-[279px] md:w-[631px]">
              You have the expertise. You have the vision. We have the engine to
              turn it into a thriving digital product, in few months.
              <br className="hidden md:block" />
              Let’s build together.
            </p>
            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button */}
              <button className="bg-tertiary text-black font-semibold px-8 py-3 rounded-lg shadow-lg w-full lg:w-58">
                Book Clarity Call
              </button>

              {/* Secondary Button */}
              <button className="border border-tertiary text-tertiary font-semibold px-8 py-3 rounded-lg w-full lg:w-58">
                Chat with support
              </button>
            </div>
          </div>
        </div>
      </Bounce>
      <div className="mt-6 md:mt-16">
        <Footer />
      </div>
    </section>
  );
}

export default LaunchThriving

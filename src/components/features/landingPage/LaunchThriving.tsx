

const LaunchThriving = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12">
      {/* Background Card */}
      <div className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1f2a2e] via-[#1b3532] to-[#102022] shadow-2xl">
        {/* Radial Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(132,204,22,0.4)_0%,_transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-6 md:px-16">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Launch a <span className="text-lime-400">3triving</span> Product
            Today!
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            You have the expertise. You have the vision. We have the engine to
            turn it into a thriving digital product, in few months.
            <br className="hidden md:block" />
            Let’s build together.
          </p>
          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <button className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-lime-300 transition duration-300">
              Book Clarity Call
            </button>

            {/* Secondary Button */}
            <button className="border border-lime-400 text-lime-400 font-semibold px-8 py-3 rounded-lg hover:bg-lime-400 hover:text-black transition duration-300">
              Chat with support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaunchThriving

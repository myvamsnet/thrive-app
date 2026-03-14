
import AboutSection from "@/components/features/landingPage/AboutSection";
import ProvenModel from "@/components/features/landingPage/ProvenModel";
import Navbar from "@/components/features/landingPage/layouts/Navbar";
import HeroSection from "@/components/features/landingPage/HeroSection";
import BottomBar from "@/components/features/landingPage/BottomBar";
import LaunchThriving from "@/components/features/landingPage/LaunchThriving";
import Footer from "@/components/features/landingPage/layouts/Footer";
import Testimonials from "@/components/features/landingPage/Testimonials";
import ProfitPortfolio from "@/components/features/landingPage/ProfitPortfolio";
import InvestToday from "@/components/features/landingPage/InvestToday";


const page = () => {
  return (
    <main className=" bg-secondary  text-white">
      <Navbar />
      <HeroSection />
      <BottomBar />
      <AboutSection />
      <BottomBar />
      <ProvenModel />
      <ProfitPortfolio />
      <InvestToday />
      <BottomBar />
      <Testimonials />
      <BottomBar />
      <LaunchThriving />
    </main>
  );
}

export default page


import AboutSection from "@/components/features/landingPage/AboutSection";
import ProvenModel from "@/components/features/landingPage/ProvenModel";
import Navbar from "@/components/features/landingPage/layouts/Navbar";
import Portfolio from "@/components/features/landingPage/Portfolio";
import HeroSection from "@/components/features/landingPage/HeroSection";
import BottomBar from "@/components/features/landingPage/BottomBar";
import PricingSection from "@/components/features/landingPage/PricingSection";
import LaunchThriving from "@/components/features/landingPage/LaunchThriving";
import Footer from "@/components/features/landingPage/layouts/Footer";



const page = () => {
  return (
    <main className=" bg-secondary  text-white">
      <Navbar />
      <HeroSection />
      <BottomBar />
      <AboutSection />
      <BottomBar />
      <ProvenModel />
      <Portfolio />
      <PricingSection/>
      <BottomBar/>
      
      <LaunchThriving/>
      <Footer/>
    </main>
  );
}

export default page


import AboutSection from "@/components/features/landingPage/AboutSection";
import ProvenModel from "@/components/features/landingPage/ProvenModel";
import Navbar from "@/components/features/landingPage/layouts/Navbar";
import Portfolio from "@/components/features/landingPage/Portfolio";
import HeroSection from "@/components/features/landingPage/HeroSection";
import BottomBar from "@/components/features/landingPage/BottomBar";


const page = () => {
  return (
    <main className=" bg-secondary  text-white">
      <Navbar />
      <HeroSection/>
     <BottomBar/>
      <AboutSection />
      <ProvenModel/>
      <Portfolio/>
    </main>
  );
}

export default page

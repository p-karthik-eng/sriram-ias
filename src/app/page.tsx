import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import AboutUs from "@/components/AboutUs";
import Results from "@/components/Results";
import OfflineCenters from "@/components/OfflineCenters";
import CurrentAffairsCTA from "@/components/CurrentAffairsCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TeachingExperts from "@/components/TeachingExperts";
import VideoCorner from "@/components/VideoCorner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="smooth-wrapper mt-[70px] lg:mt-[106px]">
          <Hero />
          
          <AboutUs />
          <Courses />
          <Results />
          <OfflineCenters />
          <CurrentAffairsCTA />
          <WhyChooseUs />
          <Testimonials />
          <TeachingExperts />
          <VideoCorner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

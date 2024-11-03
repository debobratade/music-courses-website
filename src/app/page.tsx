import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import HeroScetion from "@/components/ui/HeroScetion";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]"> 
      <HeroScetion/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinar/>
      <Instructor/>
      <Footer/>
    </main>
  );
}

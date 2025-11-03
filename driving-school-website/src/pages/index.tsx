import Header from "@/components/header/header";
import MapSection from "@/components/mapSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LearningBanner from "@/components/learningBanner";
import Testimonials from "@/components/testimonials";
import StepsToLicense from "@/components/stepsToLicense";
import WhyChooseUs from "@/components/whyChooseUs";
import CertificateSection from "@/components/certificateSection";


export default function Home() {

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white font-sans min-h-screen flex flex-col">
      
      <Header />

      <main className="overflow-y-scroll">
        <Hero/>

        <LearningBanner/>

        <StepsToLicense/>

        <WhyChooseUs/>

        <Testimonials/>

        <CertificateSection/>

        <MapSection />

      </main>
      
      <Footer/>
    </div>
      
  );
}

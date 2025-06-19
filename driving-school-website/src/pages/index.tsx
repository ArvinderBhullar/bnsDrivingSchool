import Header from "@/components/header/header";
import MapSection from "@/components/mapSection";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import LearningBanner from "@/components/learningBanner";
import PricingPlans from "@/components/pricingPlans";
import Testimonials from "@/components/testimonials";
import StepsToLicense from "@/components/stepsToLicense";
import WhyChooseUs from "@/components/whyChooseUs";


export default function Home() {

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white font-sans min-h-screen flex flex-col">
      
      <Header />

      <main className="overflow-y-scroll">
        <Hero/>

        <LearningBanner/>

        <WhyChooseUs/>
        
        <StepsToLicense/>

        <Testimonials/>

        {/* <PricingPlans/> */}

        {/*Contact Form */}

        <MapSection />

      </main>
      
      <Footer/>
    </div>
      
  );
}

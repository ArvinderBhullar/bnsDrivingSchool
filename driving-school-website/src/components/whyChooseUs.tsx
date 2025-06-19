import { AcademicCapIcon, ClipboardDocumentCheckIcon, 
    AdjustmentsHorizontalIcon, UserPlusIcon, ShieldCheckIcon, ArrowTrendingUpIcon, 
    } from '@heroicons/react/20/solid';

import FeatureCard from './featureCard';

  

const WhyChooseUs = () => {
    return (
    <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Everything you need to become a safe and confident driver
          </p>

          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <FeatureCard
              title="ICBC-Certified Instructors"
              description="Learn from ICBC-certified professionals with years of teaching experience."
              icon={<AcademicCapIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-1"
            />

            <FeatureCard
              title="Flexible Lesson Packages"
              description="Customized driving lessons tailored to your schedule, goals, and current skill level."
              icon={<AdjustmentsHorizontalIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-2 lg:col-start-1 lg:row-start-2"
            />

            <FeatureCard
              title="Road Test Preparation"
              description="Get expert guidance and a car rental option to pass your ICBC road test with confidence."
              icon={<ClipboardDocumentCheckIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-3"
            />

            <FeatureCard
              title="Personalized Learning"
              description="Lessons designed to match your skill level, from beginners to advanced drivers."
              icon={<UserPlusIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-4 lg:col-start-2 lg:row-start-2"
            />

            <FeatureCard
              title="Safe & Modern Vehicles"
              description="Train in a Toyota Corolla or a Tesla — choose between traditional or electric driving."
              icon={<ShieldCheckIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-5"
            />

            <FeatureCard
              title="High Road Test Success Rate"
              description="Proven teaching methods designed to help you pass your ICBC road test with ease."
              icon={<ArrowTrendingUpIcon className="h-20 w-20 text-stone-600" />}
              className="max-lg:row-start-6 lg:col-start-3 lg:row-start-2"
            />
            
          </div>
        </div>
    </section>
    );
  };
  
  export default WhyChooseUs;
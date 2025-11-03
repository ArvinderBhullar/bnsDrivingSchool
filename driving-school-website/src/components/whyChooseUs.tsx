import { useState, useRef } from "react";
import { AcademicCapIcon, ClipboardDocumentCheckIcon, 
    AdjustmentsHorizontalIcon, UserPlusIcon, ShieldCheckIcon, ArrowTrendingUpIcon, 
    } from '@heroicons/react/20/solid';

import FeatureCard from './featureCard';

const features = [
  {
    title: "ICBC-Certified Instructors",
    description: "Learn from ICBC-certified professionals with years of teaching experience.",
    icon: <AcademicCapIcon className="h-20 w-20" />,
  },
  {
    title: "Flexible Lesson Packages",
    description: "Customized driving lessons tailored to your schedule, goals, and current skill level.",
    icon: <AdjustmentsHorizontalIcon className="h-20 w-20" />,
  },
  {
    title: "Road Test Preparation",
    description: "Get expert guidance and a car rental option to pass your ICBC road test with confidence.",
    icon: <ClipboardDocumentCheckIcon className="h-20 w-20" />,
  },
  {
    title: "Personalized Learning",
    description: "Lessons designed to match your skill level, from beginners to advanced drivers.",
    icon: <UserPlusIcon className="h-20 w-20" />,
  },
  {
    title: "Safe & Modern Vehicles",
    description: "Train in a Toyota Corolla or a Tesla — choose between traditional or electric driving.",
    icon: <ShieldCheckIcon className="h-20 w-20" />,
  },
  {
    title: "High Road Test Success Rate",
    description: "Proven teaching methods designed to help you pass your ICBC road test with ease.",
    icon: <ArrowTrendingUpIcon className="h-20 w-20" />,
  },
];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (deltaX < -50) {
      setCurrentIndex(prev => (prev < features.length - 1 ? prev + 1 : prev));
    }
  };
    return (
    <section className="border-t border-gray-200 dark:border-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 w-[90%] lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 dark:text-gray-50 sm:text-5xl">
            Everything you need to become a safe and confident driver
          </p>

          {/* Carousel */}
          <div
            className="mt-10 flex flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <FeatureCard
              {...features[currentIndex]}
              className="max-w-lg w-full"
            />

            {/* Bullet controls */}
            <div className="flex mt-6 space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-gray-700 dark:bg-gray-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
    </section>
    );
  };
  
  export default WhyChooseUs;
import { useState, useRef } from "react";
import Image from "next/image";

const certifications = [
  {
    title: "Driving School License (ICBC)",
    image: "./certificates/images/DrivingSchoolLicense.png",
  },
  {
    title: "Driver Training Instructor License",
    image: "./certificates/images/InstructorLicense.png",
  },
  {
    title: "Better Business Bureau Certificate",
    image: "./certificates/images/BBBCert.png",
  },
  // Add more certificates here
];

const CertificateSection = () => {
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
      // Swipe right → previous slide
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (deltaX < -50) {
      // Swipe left → next slide
      setCurrentIndex((prev) =>
        prev < certifications.length - 1 ? prev + 1 : prev
      );
    }
  };
    return (
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 dark:text-white mb-16">Certifications</h2>
          {/* Carousel */}
          <div className="flex flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
            <a className="block relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={certifications[currentIndex].image}
                alt={certifications[currentIndex].title}
                width={722}
                height={593}
                loading="lazy"
                className="rounded-xl"
              />
            </a>
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
              {certifications[currentIndex].title}
            </p>

            {/* Bullet controls */}
            <div className="flex mt-6 space-x-3">
              {certifications.map((_, index) => (
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
  
  export default CertificateSection;
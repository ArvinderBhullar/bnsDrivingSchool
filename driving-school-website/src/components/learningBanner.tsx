import Image from "next/image";

const LearningBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* Top fade: blends into bg-white / dark:bg-gray-950 */}
        <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-white dark:from-gray-950 to-transparent" />

        {/* Bottom fade: blends into bg-white / dark:bg-gray-950 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />

      <Image
        alt="Side view of car used for training"
        src="./sideView.jpeg"
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Learn with us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            We go beyond just passing the test—we equip you with real-world driving skills, confidence, and the knowledge to navigate any road safely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningBanner;
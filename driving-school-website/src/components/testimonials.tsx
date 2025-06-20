const testimonials = [
  {
    name: "Shivam Arora",
    text: "Mohit is a very good instructor. I passed my driving test first time. He teaches you properly and is very nice.",
  },
  {
    name: "Bindia",
    text: "Highly recommend this driving school for anyone wanting to pass their class 7 or class 5 road test. Took this class as a complete beginner. My instructor was attentive to safety, patient, clear with the instructions and made me feel more confident and comfortable.",
    featured: true,
  },
  {
    name: "Anmol Dhillon",
    text: "Mohit is very knowledgeable and accommodating. They were flexible with scheduling and worked around my availability, making it easy to fit lessons into my routine. Highly recommend!",
  },
  {
    name: "Vikram Dhaliwal",
    text: "Highy Recommended. This school is really flexible with the timing. Got a class from Mohit for class 5. He is a decent guy taught me everything well nd I passed my road test nd got my license in first attempt. Thank you",
  },
  {
    name: "Jasmeen Kaur",
    text: "Mohit was really patient and took time to explain everything in detail. Overall great experience",
  }
];

const Testimonials = () => {
  return (
    <section className=" border-t border-gray-200 dark:border-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-[80%] md:w-[60%]">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 dark:text-gray-50 mb-16">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured testimonial spans full width */}
          {testimonials
            .filter(t => t.featured)
            .map((t, index) => (
              <div
                key={index}
                className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md"
              >
                <blockquote className="text-xl text-gray-900 dark:text-gray-50 font-medium">“{t.text}”</blockquote>
                <p className="mt-4 text-gray-600 dark:text-gray-300 font-semibold">{t.name}</p>
              </div>
            ))}

          {/* Remaining testimonials in grid */}
          {testimonials
            .filter(t => !t.featured)
            .map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
              >
                <blockquote className="text-gray-800 dark:text-gray-200">“{t.text}”</blockquote>
                <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{t.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
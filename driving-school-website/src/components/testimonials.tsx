import { useState, useRef } from "react";

type Review = {
  authorName: string;
  authorPhotoUrl: string;
  reviewText: string;
  rating: number;       // e.g., 5
  reviewDate: string;   // e.g., "2025‑10‑15"
  reviewLink: string;   // link to Google Maps review
};

const reviews: Review[] = [
  {
    authorName: "NAVNEET SINGH",
    authorPhotoUrl: "./reviews/images/ns.png",
    reviewText: "Great guidance. Just took one class and i cleared my class 5 road test .",
    rating: 5,
    reviewDate: "2 weeks ago",
    reviewLink: "https://maps.app.goo.gl/r5RDZyNPpiL69YyNA",
  },
  {
    authorName: "karan sandhu",
    authorPhotoUrl: "./reviews/images/ks.png",
    reviewText: "Very helpful and well detailed helped me a lot on my test",
    rating: 5,
    reviewDate: "3 weeks ago",
    reviewLink: "https://maps.app.goo.gl/GTEsCaizNmm9s2pQ7",
  },
  {
    authorName: "Cyndi Pougoum",
    authorPhotoUrl: "./reviews/images/cp.png",
    reviewText: "The instructor gives good instructions, and shares many of its resources. He is professional,  precise, patient and very available. I recommend him!",
    rating: 5,
    reviewDate: "3 months ago",
    reviewLink: "https://maps.app.goo.gl/JLjQhFdgpUhBopLi7",
  },
  {
    authorName: "Yanick-Romuald BOYOGUENO",
    authorPhotoUrl: "./reviews/images/yb.png",
    reviewText: "It was a wonderful experience. Beyond the instructor, he's a wonderful man. Thank you again ❗❗❗",
    rating: 5,
    reviewDate: "3 months ago",
    reviewLink: "https://maps.app.goo.gl/m6iVPhB58ejGhW6J6",
  },
  {
    authorName: "Atinderjeet",
    authorPhotoUrl: "./reviews/images/a.png",
    reviewText: "The best driving instructor 🙂🙂‍↔️🙂‍↔️ …",
    rating: 5,
    reviewDate: "4 months ago",
    reviewLink: "https://maps.app.goo.gl/7VPTwhp9cZSJgvdQA",
  },
];

const Testimonials = () => {
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
      // swipe right → previous
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (deltaX < -50) {
      // swipe left → next
      setCurrentIndex((prev) =>
        prev < reviews.length - 1 ? prev + 1 : prev
      );
    }
  };

  const { authorName, authorPhotoUrl, reviewText, rating, reviewDate, reviewLink } = reviews[currentIndex];
  return (
    <section className=" border-t border-gray-200 dark:border-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-[80%] md:w-[60%]">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 dark:text-gray-50 mb-16">
          What Our Clients Say
        </h2>

        <div
          className="flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="block w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden px-6 py-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-12 h-12">
              <img
                src={authorPhotoUrl}
                alt={authorName}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <img
                src="./GoogleG.png"
                alt="Google Logo"
                loading="lazy"
                className="absolute -bottom-1 -right-1 h-5 w-5 bg-white rounded-full"
              />
            </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center space-x-1">
                  <span>{authorName}</span>
                  <img
                    src="./ReviewBadge.png"
                    alt="Verified Review Badge"
                    loading="lazy"
                    className="h-5 w-5 align-middle"
                  />
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {reviewDate}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {reviewText}
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              <a href={reviewLink} target="_blank" rel="noopener noreferrer">See this review on Google</a>
            </p>
          </div>

          {/* Bullet controls */}
          <div className="flex mt-6 space-x-3">
              {reviews.map((_, index) => (
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

export default Testimonials;
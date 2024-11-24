"use client";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Mary K. Austin",
      role: "Law Consultant",
      color: "yellow",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Christopher Lindsey",
      role: "Finance Consultant",
      color: "green",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra accumsan lacus vel facilisis.",
      name: "Richard Turner",
      role: "Director",
      color: "purple",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigating the carousel
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1500); // Scroll every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="h-auto w-full bg-gray-100 text-center py-10">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full bg-white p-6 group rounded-lg shadow-lg border-2"
            >
              <div
                className={`text-6xl text-${testimonial.color}-500 mb-2 pt-4 bg-${testimonial.color}-100 h-16 w-16 mx-auto group-hover:bg-${testimonial.color}-400 rounded-full flex justify-center items-center`}
              >
                “
              </div>
              <p className="mb-4 text-gray-700">{testimonial.text}</p>
              <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-100 w-10 h-10 rounded-full border-none shadow-md hover:scale-110 transition-transform"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-100 w-10 h-10 rounded-full border-none shadow-md hover:scale-110 transition-transform"
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-purple-500" : "bg-gray-300"
            } cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

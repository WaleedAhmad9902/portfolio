"use client"; // Ensure compatibility with React components

import React, { useEffect, useState } from "react";

const BackgroundEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 80; // Number of streaks (light trails)
    const particleArray = [];

    // Create particle elements
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 2; // Random size (smaller size for light trails)
      const x = Math.random() * 100; // Random starting horizontal position
      const y = Math.random() * 100; // Random starting vertical position
      const speed = Math.random() * 5 + 4; // Random speed of particle movement
      const angle = Math.random() * 360; // Random direction of movement
      const delay = Math.random() * 2; // Random animation delay for better effect

      particleArray.push(
        <div
          key={i}
          className="absolute bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500 opacity-80 rounded-full animate-lightTrail"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}%`,
            left: `${x}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${speed + 3}s`, // Long duration for streak effect
            animationTimingFunction: "linear",
            transform: `rotate(${angle}deg)`, // Random rotation for direction
          }}
        ></div>
      );
    }

    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1] overflow-hidden">
      {particles}
    </div>
  );
};

export default BackgroundEffect;

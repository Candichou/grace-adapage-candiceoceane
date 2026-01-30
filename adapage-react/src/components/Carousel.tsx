import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  name: string;
  interval?: number; // Temps entre chaque image (en ms)
}

export function Carousel({ images, name, interval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Défilement automatique
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsPaused(true)} // Pause au survol
      onMouseLeave={() => setIsPaused(false)} // Reprend quand la souris part
    >
      {/* Image principale */}
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`${name} - ${currentIndex + 1}`}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>

      {/* Indicateurs (points) */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-elips-orange w-6"
                : "bg-elips-orange/30 hover:bg-elips-orange/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

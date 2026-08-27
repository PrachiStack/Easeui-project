import { Children, useState, useEffect, useCallback, useRef } from "react";
import type { FC, TouchEvent } from "react";
import type { CarouselProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel: FC<CarouselProps> = ({
  children,
  initialIndex = 0,
  loop = true,
  showArrows = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = Children.count(children);

  const next = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => {
      if (prev >= totalSlides - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  }, [totalSlides, loop]);

  const previous = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? totalSlides - 1 : prev;
      }
      return prev - 1;
    });
  }, [totalSlides, loop]);

  // AutoPlay effect
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isPaused, next, totalSlides]);

  // Touch Swipe handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      previous();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (totalSlides === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden group select-none ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={previous}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200 opacity-90 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200 opacity-90 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {showIndicators && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

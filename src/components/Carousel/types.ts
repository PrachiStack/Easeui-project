import type { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
  loop?: boolean;
  initialIndex?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}
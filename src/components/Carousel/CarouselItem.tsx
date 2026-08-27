import type { FC } from "react";
import type { CarouselItemProps } from "./types";

const CarouselItem: FC<CarouselItemProps> = ({ children, className = "" }) => {
  return <div className={`min-w-full shrink-0 ${className}`}>{children}</div>;
};

export default CarouselItem;

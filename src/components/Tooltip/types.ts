import type { ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipTrigger = "hover" | "click";
export type TooltipVariant = "dark" | "light" | "info" | "success" | "danger";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
  trigger?: TooltipTrigger;
  delay?: number;
  variant?: TooltipVariant;
  className?: string;
  disabled?: boolean;
}

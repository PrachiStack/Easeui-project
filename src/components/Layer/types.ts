import type { ReactNode } from "react";

export type LayerPosition = "left" | "right" | "top" | "bottom" | "center";
export type LayerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface LayerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  position?: LayerPosition;
  size?: LayerSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  className?: string;
  overlayClassName?: string;
}

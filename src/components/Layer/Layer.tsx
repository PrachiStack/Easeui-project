import { useEffect } from "react";
import type { FC } from "react";
import { X } from "lucide-react";
import type { LayerProps } from "./types";

const Layer: FC<LayerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  position = "right",
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = "",
  overlayClassName = "",
}) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  // Size mappings based on position
  const isHorizontal = position === "left" || position === "right";
  const isVertical = position === "top" || position === "bottom";

  const sizeClassesHorizontal = {
    sm: "w-72",
    md: "w-96",
    lg: "w-[32rem]",
    xl: "w-[40rem]",
    full: "w-full",
  };

  const sizeClassesVertical = {
    sm: "h-64",
    md: "h-96",
    lg: "h-[30rem]",
    xl: "h-[36rem]",
    full: "h-full",
  };

  const sizeClassesCenter = {
    sm: "max-w-sm w-full mx-4",
    md: "max-w-md w-full mx-4",
    lg: "max-w-lg w-full mx-4",
    xl: "max-w-xl w-full mx-4",
    full: "w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] mx-4",
  };

  let dimensionClass = "";
  if (isHorizontal) dimensionClass = `${sizeClassesHorizontal[size]} h-full`;
  else if (isVertical) dimensionClass = `${sizeClassesVertical[size]} w-full`;
  else dimensionClass = sizeClassesCenter[size];

  // Position placement classes & animation
  const positionContainerClasses = {
    right: "fixed inset-y-0 right-0 animate-in slide-in-from-right duration-300",
    left: "fixed inset-y-0 left-0 animate-in slide-in-from-left duration-300",
    top: "fixed inset-x-0 top-0 animate-in slide-in-from-top duration-300",
    bottom: "fixed inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300",
    center: "fixed inset-0 flex items-center justify-center animate-in zoom-in-95 duration-200",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in ${overlayClassName}`}
        onClick={() => closeOnOverlayClick && onClose()}
        aria-hidden="true"
      />

      {/* Layer Content Box */}
      <div className={`${positionContainerClasses[position]}`}>
        <div
          className={`bg-white shadow-2xl flex flex-col h-full border-gray-200 dark:bg-gray-900 dark:border-gray-800 ${dimensionClass} ${className}`}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
              {title ? (
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </div>
              ) : (
                <div />
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                  aria-label="Close layer"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 text-gray-700 dark:text-gray-300">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-950/50 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-3">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layer;

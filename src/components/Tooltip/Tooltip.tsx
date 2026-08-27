import { useState, useRef, useEffect } from "react";
import type { FC } from "react";
import type { TooltipProps } from "./types";

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  trigger = "hover",
  delay = 150,
  variant = "dark",
  className = "",
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;
    if (delay > 0) {
      timerRef.current = setTimeout(() => setIsVisible(true), delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsVisible(false);
  };

  const toggleTooltip = () => {
    if (disabled) return;
    setIsVisible((prev) => !prev);
  };

  // Close on outside click for click trigger
  useEffect(() => {
    if (trigger !== "click" || !isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trigger, isVisible]);

  // Handle ESC key
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  // Positioning classes
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2.5",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2.5",
    left: "right-full top-1/2 -translate-y-1/2 mr-2.5",
    right: "left-full top-1/2 -translate-y-1/2 ml-2.5",
  };

  // Arrow positioning classes
  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-current border-x-transparent border-b-transparent border-4",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-current border-x-transparent border-t-transparent border-4",
    left: "left-full top-1/2 -translate-y-1/2 border-l-current border-y-transparent border-r-transparent border-4",
    right: "right-full top-1/2 -translate-y-1/2 border-r-current border-y-transparent border-l-transparent border-4",
  };

  // Variant color themes
  const variantClasses = {
    dark: "bg-gray-900 text-white shadow-xl border border-gray-800",
    light: "bg-white text-gray-900 shadow-xl border border-gray-200",
    info: "bg-blue-600 text-white shadow-xl shadow-blue-500/20",
    success: "bg-emerald-600 text-white shadow-xl shadow-emerald-500/20",
    danger: "bg-rose-600 text-white shadow-xl shadow-rose-500/20",
  };

  const arrowColorClasses = {
    dark: "text-gray-900",
    light: "text-white",
    info: "text-blue-600",
    success: "text-emerald-600",
    danger: "text-rose-600",
  };

  const triggerProps =
    trigger === "hover"
      ? {
          onMouseEnter: showTooltip,
          onMouseLeave: hideTooltip,
          onFocus: showTooltip,
          onBlur: hideTooltip,
        }
      : {
          onClick: toggleTooltip,
        };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex ${className}`}
      {...triggerProps}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none animate-in fade-in zoom-in-95 ${positionClasses[position]} ${variantClasses[variant]}`}
        >
          {content}
          <div
            className={`absolute w-0 h-0 pointer-events-none ${arrowClasses[position]} ${arrowColorClasses[variant]}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;

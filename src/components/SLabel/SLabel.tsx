import React from "react";

export interface SLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  size?: "small" | "medium" | "large";
  weight?: "normal" | "medium" | "semibold" | "bold";
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export const SLabel: React.FC<SLabelProps> = ({
  children,
  htmlFor,
  size = "medium",
  weight = "medium",
  required = false,
  disabled = false,
  error = false,
  className = "",
}) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const baseClasses = "block transition-colors duration-200";

  const stateClasses = error
    ? "text-red-700"
    : disabled
    ? "text-gray-400"
    : "text-gray-700";

  const labelClass =
    `${baseClasses} ${sizeClasses[size]} ${weightClasses[weight]} ${stateClasses} ${className}`.trim();

  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

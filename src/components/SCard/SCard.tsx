import React from "react";

export interface SCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const SCard: React.FC<SCardProps> = ({
  children,
  title,
  subtitle,
  variant = "default",
  padding = "medium",
  className = "",
  onClick,
  header,
  footer,
}) => {
  const baseClasses =
    "bg-white rounded-lg box-border flex flex-col relative overflow-hidden";

  const variantClasses = {
    default: "border border-gray-200",
    outlined: "border-2 border-gray-300 bg-transparent",
    elevated:
      "shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out",
  };

  const paddingClasses = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  const cardClass = `${baseClasses} ${variantClasses[variant]} ${
    paddingClasses[padding]
  } ${className} ${onClick ? "cursor-pointer" : ""}`.trim();

  return (
    <div className={cardClass} onClick={onClick}>
      {header && (
        <div
          className={`border-b border-gray-200 pb-3 mb-4 ${
            padding === "none" ? "px-4 pt-4 mb-0" : ""
          }`}
        >
          {header}
        </div>
      )}

      {(title || subtitle) && (
        <div className={`mb-4 ${padding === "none" ? "px-4 mb-0" : ""}`}>
          {title && (
            <h3 className="m-0 mb-2 text-lg font-semibold text-gray-900 leading-normal">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="m-0 text-sm text-gray-600 leading-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`flex-1 ${padding === "none" ? "px-4" : ""}`}>
        {children}
      </div>

      {footer && (
        <div
          className={`border-t border-gray-200 pt-3 mt-4 ${
            padding === "none" ? "px-4 pb-4 mt-0" : ""
          }`}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

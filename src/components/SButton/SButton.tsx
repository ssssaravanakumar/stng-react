import React from "react";

export interface SButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const SButton: React.FC<SButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center border-0 rounded font-medium cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    small: "px-3 py-1.5 text-xs min-h-[28px]",
    medium: "px-4 py-2 text-sm min-h-[36px]",
    large: "px-6 py-3 text-base min-h-[44px]",
  };

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:hover:bg-blue-600",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:hover:bg-gray-600",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:hover:bg-red-600",
    success:
      "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 disabled:hover:bg-green-600",
  };

  const buttonClass =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

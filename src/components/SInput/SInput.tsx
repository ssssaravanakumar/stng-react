import React from "react";

export interface SInputProps {
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "url" | "tel";
  size?: "small" | "medium" | "large";
  variant?: "default" | "outlined" | "filled";
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const SInput: React.FC<SInputProps> = ({
  value,
  placeholder,
  type = "text",
  size = "medium",
  variant = "default",
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  className = "",
  onChange,
  onFocus,
  onBlur,
}) => {
  const baseClasses =
    "w-full border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60";

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  const variantClasses = {
    default: error
      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200",
    outlined: error
      ? "border-2 border-red-400 focus:border-red-500 focus:ring-red-200 bg-transparent"
      : "border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-200 bg-transparent",
    filled: error
      ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
      : "border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-200",
  };

  const inputClass =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClass}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {helperText && (
        <p
          className={`mt-1 text-sm ${error ? "text-red-600" : "text-gray-500"}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

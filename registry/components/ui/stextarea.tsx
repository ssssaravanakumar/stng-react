import React from "react";

export interface STextareaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outlined" | "filled";
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const STextarea: React.FC<STextareaProps> = ({
  value,
  placeholder,
  rows = 4,
  cols,
  size = "medium",
  variant = "default",
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  resize = "vertical",
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

  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  const textareaClass =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${resizeClasses[resize]} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        disabled={disabled}
        required={required}
        className={textareaClass}
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

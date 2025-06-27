import React from "react";

export interface SSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SSelectProps {
  options: SSelectOption[];
  value?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outlined" | "filled";
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  multiple?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

export const SSelect: React.FC<SSelectProps> = ({
  options,
  value,
  placeholder = "Select an option...",
  size = "medium",
  variant = "default",
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  multiple = false,
  className = "",
  onChange,
  onFocus,
  onBlur,
}) => {
  const baseClasses =
    "w-full border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 bg-white";

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
      ? "border-2 border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-200",
    filled: error
      ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200"
      : "border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-200",
  };

  const selectClass =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        disabled={disabled}
        required={required}
        multiple={multiple}
        className={selectClass}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {!multiple && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
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

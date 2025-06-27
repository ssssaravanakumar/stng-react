import React from "react";

export interface SRadioProps {
  value: string;
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SRadio: React.FC<SRadioProps> = ({
  value,
  checked = false,
  disabled = false,
  size = "medium",
  label,
  helperText,
  error = false,
  required = false,
  name,
  className = "",
  onChange,
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
  };

  const baseClasses = `
    appearance-none border-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer
    checked:bg-blue-600 checked:border-blue-600 hover:border-blue-400
    focus:ring-blue-200
  `.trim();

  const errorClasses = error
    ? "border-red-400 focus:ring-red-200 checked:bg-red-600 checked:border-red-600"
    : "border-gray-300";

  const radioClass =
    `${baseClasses} ${sizeClasses[size]} ${errorClasses} ${className}`.trim();

  const labelSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled}
            required={required}
            name={name}
            className={radioClass}
            onChange={onChange}
            style={{
              backgroundImage: checked
                ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
                : "none",
            }}
          />
        </div>
        {label && (
          <div className="ml-3">
            <label
              className={`font-medium text-gray-900 ${labelSizeClasses[size]}`}
            >
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        )}
      </div>
      {helperText && (
        <p
          className={`mt-1 text-sm ${
            error ? "text-red-600" : "text-gray-500"
          } ${label ? "ml-8" : ""}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

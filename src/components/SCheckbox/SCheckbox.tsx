import React from "react";

export interface SCheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "default" | "rounded";
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SCheckbox: React.FC<SCheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  size = "medium",
  variant = "default",
  label,
  helperText,
  error = false,
  required = false,
  className = "",
  onChange,
}) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
  };

  const baseClasses = `
    appearance-none border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer
    checked:bg-blue-600 checked:border-blue-600 hover:border-blue-400
    focus:ring-blue-200
  `.trim();

  const variantClasses = {
    default: "rounded",
    rounded: "rounded-full",
  };

  const errorClasses = error
    ? "border-red-400 focus:ring-red-200 checked:bg-red-600 checked:border-red-600"
    : "border-gray-300";

  const checkboxClass =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${className}`.trim();

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
            ref={checkboxRef}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            required={required}
            className={checkboxClass}
            onChange={onChange}
            style={{
              backgroundImage: checked
                ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")`
                : indeterminate
                ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 16 16'%3e%3cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/%3e%3c/svg%3e")`
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

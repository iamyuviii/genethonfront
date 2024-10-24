import React from 'react';

export const Button = ({ children, onClick, className = "", variant = "default" }) => {
  const baseStyle = "py-2 px-4 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  const variantStyles = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

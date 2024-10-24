import React from 'react';

export const Input = ({ id, type = "text", required = false, className = "", ...rest }) => {
  return (
    <input
      id={id}
      type={type}
      required={required}
      className={`w-full py-2 px-3 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      {...rest}
    />
  );
};

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ onChange, value, ...rest }: InputProps) {
  return (
    <input
      className="w-full p-2 border rounded mb-4"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

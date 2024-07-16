"use client";
import React from "react";

interface CustomInputProps {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string | number;
  mandatory?: boolean;
  size?: "sm" | "md" | "lg";
  defaultValue?: string | number;
}

const CustomInput = ({
  id,
  placeholder,
  type = "text",
  label,
  mandatory = false,
  size = "md",
  defaultValue = "",
}: CustomInputProps) => {
  return (
    <>
      {label && (
        <label className="font-extrabold uppercase text-sm mb-2" htmlFor={id}>
          {label}
          {mandatory && "*"}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`block w-full outline-none p-[6px] border border-red-400 bg-white rounded-md  focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]`}
        autoComplete="off"
        defaultValue={defaultValue}
      />
    </>
  );
};

export default CustomInput;

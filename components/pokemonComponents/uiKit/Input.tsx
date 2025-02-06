"use client";
import { useRouter } from "next/navigation";
import React, { KeyboardEvent } from "react";

const Input: React.FC<{}> = () => {
  const router = useRouter();

  const fn = (e: KeyboardEvent<HTMLInputElement>) => {
    // Ensure `e.target` is correctly typed
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if (e.code === "Enter" || e.code === "NumpadEnter") {
      router.push(`/pokemon/${value}`);
    }
  };
  return (
    <input
      id="input"
      onKeyUp={fn}
      className="w-4/5 h-16 outline-none xl:text-lg md:text-base text-sm"
      placeholder="Search"
    />
  );
};

export default Input;

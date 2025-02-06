"use client";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from "react";

const Button: React.FC<{}> = () => {
  const router = useRouter();

  const fn = () => {
    const inputElement = document.getElementById(
      "input"
    ) as HTMLInputElement | null;
    if (!inputElement) {
      console.error("Input element not found.");
      return;
    }

    const inputValue = inputElement.value.trim();
    if (inputValue) {
      router.push(`/pokemon/${inputValue}`);
    } else {
      console.warn("No value entered in the input.");
    }
  };
  return (
    <button
      className="bg-[#fecb05] px-4 py-2 mr-4 rounded-lg  text-[#3865d2] xl:text-xl md:text-lg text-base font-bold"
      onClick={fn}
      aria-label="Search Pokémon"
    >
      Search
    </button>
  );
};

export default Button;

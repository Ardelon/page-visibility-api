"use client";

import { IBreadCrumbItem } from "@/interface/components/BreadCrumbItem";
import { generateRandomKey } from "@/utility/rendering";
import Link from "next/link";
import { useState } from "react";

function BreadCrumbItem(props: IBreadCrumbItem) {
  const { url, isBlank, children, displayText } = props;

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDisplayDropdown(true);
  };

  const handleMouseLeave = () => {
    setDisplayDropdown(false);
  };

  if (url) {
    return (
      <>
        <Link href={url} target={isBlank ? "_blank" : ""}>
          <li className="text-xl leading-[5rem] pointer magnify-a-bit ml-5">
            {displayText}
          </li>
        </Link>
      </>
    );
  } else if (children.length > 0) {
    return (
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative text-xl leading-[5rem] pointer magnify-a-bit ml-5"
      >
        {displayText}
        <div
          className={` absolute ${
            displayDropdown ? "flex" : "hidden"
          } min-w-72 shadow bg-white flex-col -translate-x-10`}
        >
          {children.map((element) => {
            return <BreadCrumbItem key={generateRandomKey()} {...element} />;
          })}
        </div>
      </li>
    );
  }
}

export default BreadCrumbItem;

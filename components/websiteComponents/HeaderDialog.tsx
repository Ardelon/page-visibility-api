"use client";
import { breadCrumbData } from "@/data/breadCrumbData";
import { IBreadCrumbItem } from "@/interface/components/BreadCrumbItem";
import { generateRandomKey } from "@/utility/rendering";
import Link from "next/link";
import { useState } from "react";

interface Props {
  openDialog: boolean;
  breadCrumbData: IBreadCrumbItem[];
}
const ConstructChild = (props: { breadCrumb: IBreadCrumbItem }) => {
  const { breadCrumb } = props;
  return (
    <Link href={breadCrumb.url} target={breadCrumb.isBlank ? "_blank" : ""}>
      <div className="px-5 py-1 mb-2">{breadCrumb.displayText}</div>
    </Link>
  );
};

const ConstructParent = (props: { breadCrumb: IBreadCrumbItem }) => {
  const { breadCrumb } = props;

  const [display, setIsDisplay] = useState(false);

  const toggleDisplay = () => {
    setIsDisplay((s) => !s);
  };
  if (breadCrumb.url) {
    return (
      <div className="p-4 shadow ">
        <Link
          href={breadCrumb.url}
          target={breadCrumb.isBlank ? "_blank" : "_self"}
          className="font-semibold"
        >
          {breadCrumb.displayText}
        </Link>
      </div>
    );
  } else if (breadCrumb.children.length > 0) {
    return (
      <div className="shadow">
        <div
          className={`p-4  flex justify-between font-semibold ${
            display ? "bg-gray-100" : ""
          } `}
          onClick={toggleDisplay}
        >
          <span>{breadCrumb.displayText}</span>
          <span
            className={`font-bold  ${display ? "rotate-90 " : "rotate-270"}`}
          >
            {">"}
          </span>
        </div>
        <div className={`${display ? "" : "hidden"}`}>
          {breadCrumb.children.map((childBreadCrumb) => {
            return (
              <ConstructChild
                key={generateRandomKey()}
                breadCrumb={childBreadCrumb}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

function HeaderDialog(props: Props) {
  const { openDialog } = props;

  return (
    <dialog
      open={openDialog}
      className="h-[calc(100dvh-56px)] w-full bg-white top-14 absolute z-50 overflow-y-hidden"
    >
      {breadCrumbData.map((breadCrumb) => {
        return (
          <ConstructParent key={generateRandomKey()} breadCrumb={breadCrumb} />
        );
      })}
    </dialog>
  );
}

export default HeaderDialog;

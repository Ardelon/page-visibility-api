"use client";
import * as Logo from "@/data/icons/icon-source/icon-black-no-text-no-bg.png";
import { generateRandomKey } from "@/utility/rendering";
import Image from "next/image";
import Link from "next/link";
import BreadCrumbItem from "./BreadCrumbItem";
import { breadCrumbData } from "@/data/breadCrumbData";
import { useEffect, useState } from "react";
import HeaderDialog from "./HeaderDialog";
import { usePathname } from "next/navigation";

function Header() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const pathname = usePathname();
  const handleToggleDialog = () => {
    setOpenDialog((s) => !s);
  };

  useEffect(() => {
    if (openDialog) document.body.style.position = "fixed";
    else document.body.style.position = "";
  }, [openDialog]);
  useEffect(() => {
    setOpenDialog(false);
  }, [pathname]);

  return (
    <header className="h-14 xl:h-24 flex py-2 px-2 xl:px-10 items-center justify-between shadow  bg-yellow-400">
      <Link href="/">
        <div className="flex row magnify-a-bit">
          <Image
            unoptimized
            src={Logo.default}
            width={0}
            height={0}
            className="w-auto h-6 xl:h-16 m-2"
            alt="Website Logo"
          />
          <span className="text-md xl:text-3xl leading-10 xl:leading-[5rem] font-semibold">
            Ardelon Coding
          </span>
        </div>
      </Link>
      <div className="hidden xl:block h-20">
        <ul className="flex row ">
          {breadCrumbData.map((data) => {
            return <BreadCrumbItem key={generateRandomKey()} {...data} />;
          })}
        </ul>
      </div>
      <div className="xl:hidden" onClick={handleToggleDialog}>
        <div className="w-6 h-1 bg-black my-1 rounded-xl"></div>
        <div className="w-6 h-1 bg-black my-1 rounded-xl"></div>
        <div className="w-6 h-1 bg-black my-1 rounded-xl"></div>
      </div>
      <HeaderDialog openDialog={openDialog} breadCrumbData={breadCrumbData} />
    </header>
  );
}

export default Header;

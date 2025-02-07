import * as Logo from "@/data/icons/icon-source/icon-black-no-text-no-bg.png";
import { generateRandomKey } from "@/utility/rendering";
import Image from "next/image";
import Link from "next/link";
import BreadCrumbItem from "./BreadCrumbItem";
import { breadCrumbData } from "@/data/breadCrumbData";

function Header() {
  return (
    <header className="h-24 flex py-2 px-10 justify-between shadow z-50 bg-yellow-400">
      <Link href="/">
        <div className="flex row magnify-a-bit">
          <Image
            src={Logo.default}
            width={0}
            height={0}
            className="w-auto h-16 m-2"
            alt="Website Logo"
          />
          <span className="text-3xl leading-[5rem] font-semibold">
            Ardelon Coding
          </span>
        </div>
      </Link>
      <div className="h-20">
        <ul className="flex row ">
          {breadCrumbData.map((data) => {
            return <BreadCrumbItem key={generateRandomKey()} {...data} />;
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;

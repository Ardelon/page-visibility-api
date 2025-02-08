import Link from "next/link";
import { Button, Input } from "../uiKit";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex w-4/5 m-auto justify-around items-center md:flex-row flex-col pb-4 ">
      <Link href="/pokemon-app?page=1">
        <Image
          unoptimized
          alt={"Pokemon Logo"}
          className="w-64"
          src="/pokemon.png"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
      <div className="flex flex-row border-2 border-[#3865d2] rounded-xl items-center xl:w-3/5 md:3/5 w-full  h-2/5">
        <Image
          unoptimized
          alt="magnifying glass icon"
          className="px-4 xl:w-14 md:w-13 w-12"
          src={"/Vector.png"}
          width={0}
          height={0}
          sizes="100vw"
        />
        <Input />
        <Button />
      </div>
    </header>
  );
};

export default Header;

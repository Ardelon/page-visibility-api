import Link from "next/link";
import { Button, Input } from "../uiKit";

const Header = () => {
  return (
    <header className="flex w-4/5 m-auto justify-around items-center md:flex-row flex-col pb-4 ">
      <Link href="/pokemon-app/pokemon?page=1">
        <img alt={"Pokemon Logo"} className="w-64" src="/pokemon.png" />
      </Link>
      <div className="flex flex-row border-2 border-[#3865d2] rounded-xl items-center xl:w-3/5 md:3/5 w-full  h-2/5">
        <img
          alt="magnifying glass icon"
          className="px-4 xl:w-14 md:w-13 w-12"
          src={"/Vector.png"}
        />
        <Input />
        <Button />
      </div>
      {/* <h1></h1> */}
      <nav>
        {/* <Link href="/pokemon">Pokedex</Link> */}
        {/* <Link href="/pokemon">Pokemon</Link> */}
      </nav>
    </header>
  );
};

export default Header;

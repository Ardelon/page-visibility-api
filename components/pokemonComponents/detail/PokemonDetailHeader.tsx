import Link from "next/link";
import React from "react";

interface PokemonDetailHeaderProps {
  identifier: string;
}

const PokemonDetailHeader: React.FC<PokemonDetailHeaderProps> = ({
  identifier,
}) => {
  return (
    <header className="flex w-full m-auto justify-evenly py-4 text-2xl text-[#3865d2]">
      {parseInt(identifier) - 1 !== 0 ? (
        <Link href={`/pokemon-app/pokemon/${parseInt(identifier) - 1}`}>
          Previous
        </Link>
      ) : (
        <div></div>
      )}
      <span>{`${identifier} / ${process.env.POKEMON_COUNT}`}</span>
      {parseInt(identifier) + 1 <=
      parseInt(process.env.POKEMON_COUNT ?? "1025", 10) ? (
        <Link href={`/pokemon-app/pokemon/${parseInt(identifier) + 1}`}>
          Next
        </Link>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default PokemonDetailHeader;

import { getPokemon } from "@/service";
import {
  capitalizeFirstLetter,
  preparePokemonIdForDisplay,
  stripIdentifierFromUrl,
} from "@/utility";
import Link from "next/link";
import React from "react";
import { Sphere } from "../uiKit";
import Image from "next/image";

interface PokemonCardProps {
  chain: {
    name: string;
    url: string;
  };
}

async function getData(identifier: string) {
  const pokemon = await getPokemon(identifier);

  return pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = async (chain) => {
  const pokemon = await getData(chain.chain.name);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }
  return (
    <div className="">
      <Link href={`/pokemon-app/${pokemon?.id}`}>
        <div className="flex flex-row">
          <Image
            alt={`${pokemon.name} default front image`}
            src={pokemon?.sprites.front_default}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="ml-2">
            <h1 className="font-semibold text-lg">
              {capitalizeFirstLetter(pokemon?.name)}
            </h1>
            <span className="text-base">
              {preparePokemonIdForDisplay(
                stripIdentifierFromUrl(chain.chain.url)
              )}
            </span>
            <div className="flex flex-row justify-start">
              {pokemon?.types.map((type, index) => {
                return (
                  <Sphere key={type.type.name + index} type={type.type.name} />
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;

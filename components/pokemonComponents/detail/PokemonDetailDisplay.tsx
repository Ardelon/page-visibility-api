import { getPokemon } from "@/service";
import React from "react";
interface PokemonDetailDisplayProps {
  identifier: string;
}

async function getData(identifier: string) {
  const pokemon = await getPokemon(identifier);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }

  return pokemon;
}

const PokemonDetailDisplay: React.FC<PokemonDetailDisplayProps> = async ({
  identifier,
}) => {
  // const pokemon = await getData(identifier);

  // console.log(pokemon);

  return <div></div>;
};

export default PokemonDetailDisplay;

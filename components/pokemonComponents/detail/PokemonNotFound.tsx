// import { getPokemon } from "@/service";
import React from "react";
import { PokemonNotFoundCard } from ".";

// interface PokemonNotFoundProps {}

// async function getData(identifier: string) {
//   const pokemon = await getPokemon(identifier);

//   return pokemon;
// }

const PokemonNotFound: React.FC = () => {
  const pokemonIdList = [];
  for (
    let i = 0;
    i < parseInt(process.env.POKEMON_NOT_FOUND_DISPLAY_COUNT ?? "10", 10);
    i++
  ) {
    pokemonIdList.push({
      identifier: Math.ceil(
        Math.random() * parseInt(process.env.POKEMON_COUNT ?? "1025", 10)
      ),
    });
  }

  return (
    <div className="flex flex-col w-4/5 m-auto gap-8 justify-center">
      <h2 className="xl:text-3xl md:text-2xl sm:text-xl font-semibold text-center my-4">
        We cannot find the Pokemon you are looking for but here are some of them
      </h2>
      <section className="flex flex-wrap w-4/5 m-auto gap-4 justify-center">
        {pokemonIdList.map((obj, index) => {
          return (
            <PokemonNotFoundCard key={index} identifier={obj.identifier} />
          );
        })}
      </section>
    </div>
  );
};

export default PokemonNotFound;

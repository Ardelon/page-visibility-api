import { IPokemon } from "@/interface/pokemonInterface";
import { capitalizeFirstLetter } from "@/utility";
import React from "react";
import { Badge, Score } from "../uiKit";

interface PokemonDetailLeftSideInterface {
  pokemon: IPokemon;
}

const PokemonDetailLeftSide: React.FC<PokemonDetailLeftSideInterface> = ({
  pokemon,
}) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="md:block flex flex-col justify-center">
        <h1 className="md:hidden text-5xl font-bold text-[#3865d2] text-center ">
          {capitalizeFirstLetter(pokemon.name)}
        </h1>
        <img
          alt={`${pokemon.name} default front image`}
          className="w-96 m-auto"
          src={pokemon.sprites.front_default}
        />
      </div>
      <div>
        <div>
          <label className="md:text-xl text-lg font-bold pt-3 block text-center md:text-start ">
            Height : {pokemon.height}
          </label>
        </div>
        <div>
          <label className="md:text-xl text-lg font-bold pt-3 block text-center md:text-start">
            Weight : {pokemon.weight}
          </label>
        </div>
        <div>
          <label className="md:text-xl text-lg font-bold pt-3 block text-center md:text-start">
            Abilities :{" "}
          </label>
          {pokemon.abilities.map((ability, index) => {
            return (
              <p
                className="pl-2 font-semibold text-base md:text-lg text-center md:text-start"
                key={ability.ability.name + index}
              >
                {ability.ability.name}
              </p>
            );
          })}
        </div>
        <div>
          <label className="md:text-xl text-lg font-bold py-3 block text-center md:text-start">
            Type
          </label>
          <div className="flex flex-row gap-2 py-2 justify-center md:justify-start">
            {pokemon.types.map((type, index) => {
              return (
                <Badge type={type.type.name} key={type.type.name + index} />
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="md:text-xl text-lg font-bold py-3 text-center md:text-start">
            {capitalizeFirstLetter(pokemon.name) + " Stats"}
          </h4>
          <ul>
            {pokemon?.stats.map((stat, index) => {
              return (
                <div className="" key={stat.stat.name + index}>
                  <label className="mx:text-xl text-lg font-semibold text-center md:text-start ">
                    {capitalizeFirstLetter(stat.stat.name)}
                  </label>
                  <Score statValue={stat.base_stat} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailLeftSide;

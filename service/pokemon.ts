import { IPokemon, IPokemonList } from "@/interface/pokemonInterface";
import { IErrorResponse } from "@/interface/serviceInterface";
import { mapPokemon, mapPokemonList } from "@/mapper";
import { validatePokemonData, validatePokemonListData } from "@/validator";
import axios from "axios";

type PokemonListResponse = IPokemonList | IErrorResponse;

const getPokemonList = (offset: number = 0): Promise<PokemonListResponse> => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${process.env.POKEMON_DISPLAY_COUNT}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validatePokemonListData(response);
      if (isValid) {
        return mapPokemonList(data);
      } else {
        return { message: "Something is wrong with data source" };
      }
    })
    .catch((error) => {
      console.error(error);
      return { message: "Data source is not responding correctly" };
    });
};

type PokemonResponse = IPokemon | IErrorResponse;

const getPokemon = (identifier: string): Promise<PokemonResponse> => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${identifier}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validatePokemonData(response);

      if (isValid) return mapPokemon(data);
      else return { message: "Something is wrong with data source" };
    })
    .catch((error) => {
      console.log(error);
      return { message: "Data source is not responding correctly" };
    });
};

export { getPokemon, getPokemonList };

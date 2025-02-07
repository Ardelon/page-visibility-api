import { IErrorResponse, IPokemon, IPokemonList } from "@/interface";
import { mapPokemon, mapPokemonList } from "@/mapper";
import { validatePokemonData, validatePokemonListData } from "@/validator";
import axios from "axios";

type PokemonListResponse = IPokemonList | IErrorResponse;

const getPokemonList = (
  offset: number = 0,
  pokemonDisplayCount: number = -1
): Promise<PokemonListResponse> => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${
      pokemonDisplayCount < 0
        ? process.env.POKEMON_DISPLAY_COUNT
        : pokemonDisplayCount
    }`,
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
  const config = {
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

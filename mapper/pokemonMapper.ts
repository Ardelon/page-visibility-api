/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPokemon } from "@/interface";

const mapPokemonList = (response: any) => {
  const data = response.data;
  const collection = {
    next: data.next,
    previous: data.previous,
    results: data.results,
  };
  return collection;
};

const mapPokemon = (response: any) => {
  const data = response.data;
  const collection: IPokemon = {
    abilities: data.abilities,
    base_experience: data.base_experience,
    forms: data.forms,
    height: data.height,
    id: data.id,
    is_default: data.is_default,
    location_area_encounters: data.location_area_encounters,
    moves: data.moves,
    name: data.name,
    order: data.order,
    species: data.species,
    sprites: {
      back_default: data.sprites?.back_default || undefined,
      back_female: data.sprites?.back_female || undefined,
      back_shiny: data.sprites?.back_shiny,
      back_shiny_female: data.sprites?.back_shiny_female || undefined,
      front_default: data.sprites?.front_default || undefined,
      front_female: data.sprites?.front_female || undefined,
      front_shiny: data.sprites?.front_shiny || undefined,
      front_shiny_female: data.sprites?.front_shiny_female || undefined,
    },
    stats: data.stats,
    types: data.types,
    weight: data.weight,
  };
  return collection;
};

export { mapPokemon, mapPokemonList };

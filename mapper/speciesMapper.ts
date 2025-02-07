/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISpecies } from "@/interface";

const mapSpecies = (response: any) => {
  const data = response.data;
  const collection: ISpecies = {
    base_happiness: data.base_happiness,
    capture_rate: data.capture_rate,
    color: data.color,
    egg_groups: data.egg_groups,
    evolution_chain: data.evolution_chain,
    evolves_from_species: data.evolves_from_species,
    growth_rate: data.growth_rate,
    habitat: data.habitat,
    id: data.id,
    is_baby: data.is_baby,
    is_legendary: data.is_legendary,
    is_mythical: data.is_mythical,
    name: data.name,
    names: data.names,
    order: data.order,
    shape: data.shape,
    varieties: data.varieties,
  };
  return collection;
};

export { mapSpecies };

interface ISpecies {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: Array<{ name: string; url: string }>;
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Array<{ language: { name: string; url: string }; name: string }>;
  order: number;
  shape: { name: string; url: string };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  };
}

export type { ISpecies };

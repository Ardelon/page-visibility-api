const validatePokemonIdentifier = (identifier: string) => {
  if (identifier) return [true, identifier];
  else return [false, identifier];
};

const validatePokemonListData = (data: object) => {
  if (data) return [true, data];
  else return [false, data];
};

const validatePokemonData = (data: object) => {
  if (data) return [true, data];
  else return [false, data];
};

export {
  validatePokemonData,
  validatePokemonIdentifier,
  validatePokemonListData,
};

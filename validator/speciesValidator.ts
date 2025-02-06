const validateSpecies = (identifier: any) => {
  if (identifier) return [true, identifier];
  else return [false, identifier];
};

export { validateSpecies };

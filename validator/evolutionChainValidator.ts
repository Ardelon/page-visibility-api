const validateEvolutionChain = (identifier: any) => {
  if (identifier) return [true, identifier];
  else return [false, identifier];
};

export { validateEvolutionChain };

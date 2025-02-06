import { IEvolutionChain } from "@/interface/evolutionChainInterface";

const mapEvolutionChain = (response: any) => {
  const data = response.data;
  const collection: IEvolutionChain = {
    id: data.id,
    species: [],
  };

  let isEvolving = true;
  let iterationData = data.chain;
  while (isEvolving) {
    collection.species.push(iterationData.species);
    if (iterationData.evolves_to.length) {
      iterationData = iterationData.evolves_to[0];
    } else {
      isEvolving = false;
    }
  }

  return collection;
};

export { mapEvolutionChain };

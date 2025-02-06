import { mapSpecies } from "@/mapper";
import { validateSpecies } from "@/validator";
import axios from "axios";

const getSpecies = (identifier: number) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon-species/${identifier}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validateSpecies(response);
      if (isValid) {
        return mapSpecies(data);
      } else {
        console.log("Something is wrong with data source");
        return { message: "Something is wrong with data source" };
      }
    })
    .catch((error) => {
      console.log(error);
      console.log("Data source is not responding correctly");
      return { message: "Data source is not responding correctly" };
    });
};

export { getSpecies };

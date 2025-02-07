import { IErrorResponse, IEvolutionChain } from "@/interface";
import { mapEvolutionChain } from "@/mapper";
import { validateEvolutionChain } from "@/validator";
import axios from "axios";

type EvolutionChainResponse = IEvolutionChain | IErrorResponse;
const getEvolutionChain = (url: string): Promise<EvolutionChainResponse> => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validateEvolutionChain(response);
      if (isValid) {
        return mapEvolutionChain(data);
      } else {
        return { message: "Something is wrong with data source" };
      }
    })
    .catch((error) => {
      console.log(error);

      return { message: "Data source is not responding correctly" };
    });
};

export { getEvolutionChain };

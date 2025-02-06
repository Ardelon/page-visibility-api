import { mapType, mapTypeList } from "@/mapper";
import { validateType, validateTypeList } from "@/validator";
import axios from "axios";

const getTypeList = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://pokeapi.co/api/v2/type",
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validateTypeList(response);

      if (isValid) return mapTypeList(data);
      else return { message: "Something is wrong with data source" };
    })
    .catch((error) => {
      console.log(error);
      return { message: "Data source is not responding correctly" };
    });
};

const getType = (identifier: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/type/${identifier}`,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      const [isValid, data] = validateType(response);

      if (isValid) return mapType(data);
      else return { message: "Something is wrong with data source" };
    })
    .catch((error) => {
      return { message: "Data source is not responding correctly" };
    });
};

export { getType, getTypeList };

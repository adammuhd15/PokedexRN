import axios from "../../../utils/interceptor/axios";
import { APIResponseProps } from "../../../utils/APIResponseProps";
import { GetAllPokemonProps } from "../../../utils/pokemon/AllPokemonProps";
import { GetPokemonDetailsProps } from "../../../utils/pokemon/PokemonDetailProps";

export const getAllPokemon = async (offset: number) => {
  return axios.get(`/pokemon?limit=20&offset=${offset}`)
  .then((response: APIResponseProps<GetAllPokemonProps>) => {
    return response.data;
  });
}

export const getThatPokemonInfo = async (id: string) => {
  return axios.get(`/pokemon/${id}`)
  .then((response: APIResponseProps<GetPokemonDetailsProps>) => {
    return response.data;
  });
}

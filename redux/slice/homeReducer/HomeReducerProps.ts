// Local imports
import { GetPokemonDetailsProps } from "../../../utils/pokemon/PokemonDetailProps";
import { PokemonProps } from "../../../utils/pokemon/AllPokemonProps";

// Define a type for the slice state
export interface HomeReducerProps {
  pokemonList: PokemonProps[],
  offSetNumber: number,
  isFetching: boolean,
  pokemonName: GetPokemonDetailsProps[],
}

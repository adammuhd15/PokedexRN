import {
  ViewStyle,
  TextStyle,
} from "react-native";

// Local imports
import { PokemonProps } from "../../../utils/pokemon/AllPokemonProps";
import { GetPokemonDetailsProps } from "../../../utils/pokemon/PokemonDetailProps";

// Header
export interface HomeHeaderProps {
  safeInsetsTop: number;
};

export interface HomeHeaderStyleProps {
  homeHeaderContainer: ViewStyle;
  homeHeaderPokeball: ViewStyle;
  homeHeaderText: TextStyle;
};

// Pokemon Card
export interface PokemonCardProps {
  item: PokemonProps;
  index: number;
  onDetailPressItem: (name: string) => void;
  pokemonName: GetPokemonDetailsProps[];
};

export interface PokemonCardStyleProps {
  cardContainer: ViewStyle;
  cardText: TextStyle;
}

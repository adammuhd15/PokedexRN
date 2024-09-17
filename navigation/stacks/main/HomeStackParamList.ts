import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Local imports
import { GetPokemonDetailsProps } from "../../../utils/pokemon/PokemonDetailProps";

export type HomeStackParamList = {
  Home: undefined;
  Detail: { pokemonInformation: GetPokemonDetailsProps, name: string };
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: NativeStackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

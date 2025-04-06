import React from "react";
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  Animated,
  ColorValue,
  StyleProp,
} from "react-native";

// Local imports
import { GetPokemonDetailsProps } from "../../../utils/pokemon/PokemonDetailProps";

// Header
export interface PokemonDetailHeaderProps {
  scaleHeader: Animated.AnimatedInterpolation<string | number>,
  translateHeader: Animated.AnimatedInterpolation<string | number>,
  opacityImage: Animated.AnimatedInterpolation<string | number>,
  scaleImage: Animated.AnimatedInterpolation<string | number>,
  pokemonName: string,
  pokemonInformation: GetPokemonDetailsProps,
  handleGoBack: () => void,
  safeInsetsTop: number,
};

export interface PokemonDetailHeaderStyleProps {
  fixBackButton: ViewStyle;
  headerContainer: ViewStyle;
  headerImage: ImageStyle;
  headerTitle: TextStyle;
  imageWrapper: ViewStyle;
  pokeball: ViewStyle;
};

// Section
export interface PokemonDetailSectionProps {
  children: React.ReactNode;
  title: string;
}

export interface PokemonDetailSectionStyleProps {
  pokeSectionContainer: ViewStyle;
  pokeSectionTitle: TextStyle;
  pokeSectionCellContainer: ViewStyle;
}

// Cell
export interface PokemonDetailCellProps {
  backgroundColor?: ColorValue | undefined;
  name: string;
  index: number;
};

export interface PokemonDetailCellStyleProps {
  pokeCellContainer: ViewStyle;
  pokeCellText: TextStyle;
};

// Pokeball
export interface PokeballProps {
  style?: StyleProp<ViewStyle>;
}

export interface PokeballStyleProps {
  pokeballContainer: ViewStyle;
  pokeballTopRed: ViewStyle;
  pokeballBottomWhite: ViewStyle;
  pokeballFixedCenter: ViewStyle;
};

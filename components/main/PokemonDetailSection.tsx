import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

// Local imports
import * as Colors from "../../constants/Colors";
import {
  PokemonDetailSectionProps,
  PokemonDetailSectionStyleProps,
} from "./PokemonDetailProps";

const PokemonDetailSection: React.FC<PokemonDetailSectionProps> = ({
  children,
  title
}) => {
  return (
    <View style={pokeSectionStyles.pokeSectionContainer}>
      <Text
        style={pokeSectionStyles.pokeSectionTitle}
      >{title}</Text>
      <View
        style={pokeSectionStyles.pokeSectionCellContainer}
      >
        {children}
      </View>
    </View>
  );
}

// StyleSheet
const pokeSectionStyles = StyleSheet.create<PokemonDetailSectionStyleProps>({
  pokeSectionContainer: {
    marginBottom: 10,
  },
  pokeSectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 10,
  },
  pokeSectionCellContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default PokemonDetailSection;

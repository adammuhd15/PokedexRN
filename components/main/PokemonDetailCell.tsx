import React from "react";
import {
  View,
  Dimensions,
  Text,
  ColorValue,
  StyleSheet,
  ViewStyle,
} from "react-native";

// Local imports
import * as Colors from "../../constants/Colors";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";
import {
  PokemonDetailCellProps,
  PokemonDetailCellStyleProps,
} from "./PokemonDetailProps";

const screenWidth = Dimensions.get("window").width;

const PokemonDetailCell: React.FC<PokemonDetailCellProps> = ({
  backgroundColor,
  name,
  index,
}) => {
  return (
    <View
      style={[pokeCellStyles.pokeCellContainer, cellContainerStyle(backgroundColor, index)]}
    >
      <Text
        style={pokeCellStyles.pokeCellText}
      >{`${capitalizeFirstAlphabet(name)}`}</Text>
    </View>
  );
}

// Function for dynamic style
const cellContainerStyle = (
  backgroundColor: ColorValue | undefined,
  index: number,
): ViewStyle => ({
  backgroundColor: backgroundColor,
  marginRight: index % 2 === 0 ? 20 : 0,
});

// StyleSheet
const pokeCellStyles = StyleSheet.create<PokemonDetailCellStyleProps>({
  pokeCellContainer: {
    width: (screenWidth / 2) - 30,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  pokeCellText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: Colors.white,
  },
});

export default PokemonDetailCell;

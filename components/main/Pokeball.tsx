import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

// Local imports
import * as Colors from "../../constants/Colors";
import {
  PokeballProps,
  PokeballStyleProps,
} from "./PokemonDetailProps";

const Pokeball: React.FC<PokeballProps> = ({ style }) => {
  return (
    <View
      style={[pokeballStyles.pokeballContainer, style]}
    >
      <View
        style={pokeballStyles.pokeballTopRed}
      />
      <View
        style={pokeballStyles.pokeballBottomWhite}
      />
      <View
        style={pokeballStyles.pokeballFixedCenter}
      />
    </View>
  );
}

const pokeballStyles = StyleSheet.create<PokeballStyleProps>({
  pokeballContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: "hidden",
  },
  pokeballTopRed: {
    width: "100%",
    height: "50%",
    backgroundColor: Colors.red,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  pokeballBottomWhite: {
    width: "100%",
    height: "50%",
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.black,
  },
  pokeballFixedCenter: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    position: "absolute",
    left: 19,
    top: 19,
  },
});

export default Pokeball;

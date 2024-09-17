import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Local imports
import * as Colors from "../../constants/Colors";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";
import { GetPokemonDetailsProps } from "../../utils/pokemon/PokemonDetailProps";
import {
  PokemonCardProps,
  PokemonCardStyleProps,
} from "./HomeProps";

const PokemonCard: React.FC<PokemonCardProps> = ({ item, onDetailPressItem }) => {
  const handleFilterID = () => {
    onDetailPressItem(item.name);
  }
  return (
    <TouchableOpacity
      style={pokeCardStyles.cardContainer}
      onPress={handleFilterID}
    >
      <Text style={pokeCardStyles.cardText}>Name: {capitalizeFirstAlphabet(item.name)}</Text>
    </TouchableOpacity>
  );
}

const pokeCardStyles = StyleSheet.create<PokemonCardStyleProps>({
  cardContainer: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: Colors.gold,
    borderWidth: 2,
    borderColor: Colors.primaryTheme,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 20,
    color: Colors.primaryTheme,
    marginBottom: 10,
  },
});

export default React.memo(PokemonCard, (prevProps, nextProps) => {
  let nextArr = nextProps.pokemonName.find((value: GetPokemonDetailsProps) => value.name === nextProps.item.name);
  /**
   * if statement below is to show the current cell need to be rerendered because there is item pushed in array
   */
  if (nextArr) {
    let newInsertedObject = nextProps.pokemonName[nextProps.pokemonName.length - 1];
    let prevInsertedObject = prevProps.pokemonName[prevProps.pokemonName.length - 1];
    if (prevInsertedObject === undefined) {
      if (newInsertedObject.name === nextArr.name) {
        return false; // false means re-render
      }
    } else if (prevProps.pokemonName.length === nextProps.pokemonName.length) {
      return true;
    } else {
      if (newInsertedObject.name === nextArr.name) {
        return false; // false means re-render
      }
    }
  }
  return true;
});

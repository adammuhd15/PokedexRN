import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from "react-native";

// Local imports
import * as Colors from "../../../constants/Colors";
import Pokeball from "../Pokeball";
import { HomeHeaderProps, HomeHeaderStyleProps } from "../HomeProps";

const HomeHeader: React.FC<HomeHeaderProps> = ({ safeInsetsTop }) => {
  return (
    <View
      style={[homeHeaderStyles.homeHeaderContainer, homeHeaderPassStyle(safeInsetsTop)]}
      testID="home-header"
    >
      {/* Pokeball */}
      <Pokeball
        style={homeHeaderStyles.homeHeaderPokeball}
      />
      {/* Pokeball Text */}
      <Text
        style={homeHeaderStyles.homeHeaderText}
      >
        Pokedex
      </Text>
    </View>
  );
}

// Function for dynamic style
const homeHeaderPassStyle = (safeInsetsTop: number): ViewStyle => ({
  paddingTop: safeInsetsTop + 24,
});

const homeHeaderStyles = StyleSheet.create<HomeHeaderStyleProps>({
  homeHeaderContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 24,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.primaryTheme,
  },
  homeHeaderPokeball: {
    marginRight: 12,
  },
  homeHeaderText: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default React.memo(HomeHeader);

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

// Local imports
import * as Colors from "../../constants/Colors";
import Pokeball from "./Pokeball";
import { HomeHeaderProps } from "./HomeProps";

const HomeHeader = () => {
  const safeInsets = useSafeAreaInsets();
  return (
    <View
      style={[homeHeaderStyles.homeHeaderContainer, homeHeaderPassStyle(safeInsets)]}
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
const homeHeaderPassStyle = (safeInsets: EdgeInsets): ViewStyle => ({
  paddingTop: safeInsets.top + 24,
});

const homeHeaderStyles = StyleSheet.create<HomeHeaderProps>({
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

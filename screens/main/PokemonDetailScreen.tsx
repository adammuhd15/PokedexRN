import React, { useRef, useLayoutEffect, useCallback } from "react";
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  ViewStyle,
  Platform,
} from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Local imports
import * as Colors from "../../constants/Colors";
import PokemonDetailHeader from "../../components/main/PokemonDetailHeader";
import { HomeStackNavProps } from "../../navigation/stacks/main/HomeStackParamList";
import { capitalizeFirstAlphabet } from "../../services/helper/CapitalizeFirst";
import { PokemonColorProps, PokemonColors } from "../../constants/PokemonColors";
import PokemonDetailCell from "../../components/main/PokemonDetailCell";
import PokemonDetailSection from "../../components/main/PokemonDetailSection";
import { PokemonDetailStyleProps } from "./PokemonDetailProps";

const screenWidth = Dimensions.get("window").width;

const PokemonDetailScreen: React.FC<HomeStackNavProps<"Detail">> = ({ navigation, route }) => {
  const { params } = route;
  const { name, pokemonInformation } = params;
  // Safe Insets
  const safeInsets = useSafeAreaInsets();
  const bottomTabHeight = useBottomTabBarHeight();
  // Scrolling reference start
  const scrollY = useRef<Animated.Value>(new Animated.Value(0)).current; // For Header Animation
  // Animation
  const animationVerticalLength = (screenWidth / 2) - safeInsets.top + 36;
  const scaleHeader = scrollY.interpolate({
    inputRange: [-animationVerticalLength, 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });
  
  const translateHeader = scrollY.interpolate({
    inputRange: [0, animationVerticalLength],
    outputRange: [0, -(animationVerticalLength)],
    extrapolate: "clamp",
  });

  const opacityImage = scrollY.interpolate({
    inputRange: [0, animationVerticalLength],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  
  const scaleImage = scrollY.interpolate({
    inputRange: [0, animationVerticalLength],
    outputRange: [1, 0.7],
    extrapolate: "clamp",
  });
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <PokemonDetailHeader
          scaleHeader={scaleHeader}
          translateHeader={translateHeader}
          opacityImage={opacityImage}
          scaleImage={scaleImage}
          pokemonName={capitalizeFirstAlphabet(name)}
          pokemonInformation={pokemonInformation}
          handleGoBack={handleGoBack}
          safeInsetsTop={safeInsets.top}
        />
      ),
      headerTransparent: true,
    })
  }, [])
  // Background color
  const typeName: string = pokemonInformation.types[0].type.name;
  const typeBackgroundColor: string = PokemonColors[typeName as keyof PokemonColorProps];
  return (
    <View style={pokemonDetailStyles.pokemonDetailContainer}>
      <Animated.ScrollView
        style={[pokemonDetailStyles.scrollViewContainer, scrollViewContainerStyle(safeInsets)]}
        // Temporary Start
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        // Temporary End
        showsVerticalScrollIndicator={false}
      >
        {/* Types */}
        <PokemonDetailSection title="Types">
          {pokemonInformation.types.map((type, index) => {
            const typeIndividualName: string = type.type.name;
            const typeIndividualBackgroundColor: string = PokemonColors[typeIndividualName as keyof PokemonColorProps];
            return (
              <PokemonDetailCell
                key={index.toString()}
                index={index}
                name={type.type.name}
                backgroundColor={typeIndividualBackgroundColor}
              />
            )
          })}
        </PokemonDetailSection>
        {/* Abilities */}
        <PokemonDetailSection title="Abilities">
          {pokemonInformation.abilities.map((ability, index) => (
            <PokemonDetailCell
              key={index.toString()}
              index={index}
              name={ability.ability.name}
              backgroundColor={typeBackgroundColor}
            />
          ))}
        </PokemonDetailSection>
        {/* Moves */}
        <PokemonDetailSection title="Moves">
          {pokemonInformation.moves.map((move, index) => (
            <PokemonDetailCell
              key={index.toString()}
              index={index}
              name={move.move.name}
              backgroundColor={typeBackgroundColor}
            />
          ))}
        </PokemonDetailSection>
        {/* Stats */}
        <PokemonDetailSection title="Stats">
          {pokemonInformation.stats.map((stat, index) => (
            <PokemonDetailCell
                key={index.toString()}
                index={index}
                name={`${stat.stat.name}: ${stat.base_stat}`}
                backgroundColor={typeBackgroundColor}
              />
          ))}
        </PokemonDetailSection>
        {Platform.OS !== "ios" && (
          <View
            style={emptyViewStyle(bottomTabHeight)}
          />
        )}
      </Animated.ScrollView>
    </View>
  );
}

// Function for dynamic style
const scrollViewContainerStyle = (safeInsets: EdgeInsets): ViewStyle => ({
  paddingTop: (screenWidth / 2) + safeInsets.top + 20 + 60,
});

const emptyViewStyle = (bottomTabHeight: number): ViewStyle => ({
  width: bottomTabHeight + (screenWidth / 2) + 20 + 60,
  height: bottomTabHeight + (screenWidth / 2) + 20 + 60
});

// StyleSheet
const pokemonDetailStyles = StyleSheet.create<PokemonDetailStyleProps>({
  pokemonDetailContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    backgroundColor: Colors.white,
    padding: 20,
  },
})

export default PokemonDetailScreen;

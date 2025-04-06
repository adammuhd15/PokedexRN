import React from "react";
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  ViewStyle,
  ImageStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

// Local imports
import * as Colors from "../../../constants/Colors";
import {
  PokemonColorProps,
  PokemonColors,
} from "../../../constants/PokemonColors";
import Pokeball from "../Pokeball";
import {
  PokemonDetailHeaderProps,
  PokemonDetailHeaderStyleProps,
} from "../PokemonDetailProps";

const screenWidth = Dimensions.get("window").width;

const PokemonDetailHeader: React.FC<PokemonDetailHeaderProps> = ({
  scaleHeader,
  translateHeader,
  scaleImage,
  opacityImage,
  pokemonName,
  pokemonInformation,
  handleGoBack,
}) => {
  // Carousel ref start
  const pokemonSprites = [
    pokemonInformation.sprites.front_default,
    pokemonInformation.sprites.back_default,
    pokemonInformation.sprites.front_female,
    pokemonInformation.sprites.back_female,
    pokemonInformation.sprites.front_shiny,
    pokemonInformation.sprites.back_shiny,
    pokemonInformation.sprites.front_shiny_female,
    pokemonInformation.sprites.back_shiny_female,
  ].filter(Boolean); // Filter out null or undefined values
  // Carousel ref end
  const safeInsets = useSafeAreaInsets();
  // Switch background color
  const typeName: string = pokemonInformation.types[0].type.name;
  const typeBackgroundColor: string = PokemonColors[typeName as keyof PokemonColorProps];
  return (
    <>
      <TouchableOpacity
        style={[pokeHeaderStyles.fixBackButton, fixBackButtonStyle(safeInsets)]}
        onPress={handleGoBack}
      >
        <Ionicons
          name="chevron-back"
          color={Colors.white}
          size={26}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          pokeHeaderStyles.headerContainer,
          headerContainerAnimationStyle(
            safeInsets,
            typeBackgroundColor,
            translateHeader,
            scaleHeader
          )
        ]}
      >
        <View style={[pokeHeaderStyles.imageWrapper, { alignSelf: "center" }]}>
          <ScrollView
            horizontal
            decelerationRate={0}
            snapToInterval={(screenWidth / 2)} //your element width
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
          >
            {pokemonSprites.map((sprite, index) => (
              <Animated.Image
                key={index}
                style={[
                  pokeHeaderStyles.headerImage,
                  headerImageAnimationStyle(scaleImage, opacityImage),
                ]}
                source={{ uri: sprite ?? "" }}
              />
            ))}
          </ScrollView>
        </View>
        <Text style={pokeHeaderStyles.headerTitle}>
          {pokemonName}
        </Text>
        {/* Fixed Pokeball */}
        <Pokeball
          style={pokeHeaderStyles.pokeball}
        />
      </Animated.View>
    </>
  );
}

// Function for dynamic style
const headerImageAnimationStyle = (
  scaleImage: Animated.AnimatedInterpolation<string | number>,
  opacityImage: Animated.AnimatedInterpolation<string | number>,
): ImageStyle => ({
  transform: [{ scale: scaleImage }], // Adjust the scale as needed
  opacity: opacityImage, // Adjust opacity if needed
});

const headerContainerAnimationStyle = (
  safeInsets: EdgeInsets,
  typeBackgroundColor: string,
  translateHeader: Animated.AnimatedInterpolation<string | number>,
  scaleHeader: Animated.AnimatedInterpolation<string | number>,
): ViewStyle => ({
  height: safeInsets.top + (screenWidth / 2) + 60,
  backgroundColor: typeBackgroundColor,
  transform: [{ translateY: translateHeader }, { scale: scaleHeader }],
});

const fixBackButtonStyle = (safeInsets: EdgeInsets): ViewStyle => ({
  bottom: (screenWidth / 2) - safeInsets.top + 36 + 15,
});

// StyleSheet
const pokeHeaderStyles = StyleSheet.create<PokemonDetailHeaderStyleProps>({
  fixBackButton: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  headerContainer: {
    width: screenWidth,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "stretch",
    justifyContent: "flex-end",
    // Shadow
    shadowColor: Colors.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 50,
  },
  headerImage: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    width: (screenWidth / 2),
    height: (screenWidth / 2),
  },
  pokeball: {
    position: "absolute",
    right: 20,
    bottom: -25,
  }
});

export default React.memo(PokemonDetailHeader);

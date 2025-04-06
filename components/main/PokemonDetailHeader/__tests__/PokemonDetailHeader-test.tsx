import { render, fireEvent } from "@testing-library/react-native";
import { Animated } from 'react-native';

import PokemonDetailHeader from "../";

// Mock the Animated.AnimatedInterpolation
const mockAnimation = new Animated.Value(0);

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');

describe("<PokemonDetailHeader />", () => {
  test("Text renders correctly on PokemonDetailHeader", () => {
    const pokemonInformation = {
      abilities: [],
      base_experience: 10,
      cries: {
        latest: "https://www.github.com/",
        legacy: "https://www.github.com/",
      },
      forms: [],
      height: 10,
      id: 10,
      is_default: true,
      moves: [],
      name: "Blaziken",
      order: 10,
      species: {
        name: "Bird",
        url: "https://www.github.com/",
      },
      sprites: {
        front_default: "https://www.instagram.com/",
        back_default: "https://www.github.com/",
        front_female: "https://www.tiktok.com/",
        back_female: "https://www.facebook.com/",
        front_shiny: "https://www.x.com/",
        back_shiny: "https://www.google.com/",
        front_shiny_female: "https://www.youtube.com/",
        back_shiny_female: "https://www.grab.com/",
      },
      stats: [],
      types: [
        {
          slot: 10,
          type: {
            name: "Blaze",
            url: "https://www.github.com/",
          },
        },
      ],
      weight: 10,
    }
    const { getByText, getByTestId, queryAllByTestId } = render(
      <PokemonDetailHeader
        handleGoBack={jest.fn()}
        scaleHeader={mockAnimation}
        translateHeader={mockAnimation}
        opacityImage={mockAnimation}
        scaleImage={mockAnimation}
        pokemonName={"Blaziken"}
        pokemonInformation={pokemonInformation}
        safeInsetsTop={100}
      />
    );

    const button = getByTestId("back-button")
    const tree = queryAllByTestId("pokemon-detail-header");
    const image0 = getByTestId("pokemon-image-0");
    const image1 = getByTestId("pokemon-image-1");
    const image2 = getByTestId("pokemon-image-2");
    const image3 = getByTestId("pokemon-image-3");
    const image4 = getByTestId("pokemon-image-4");
    const image5 = getByTestId("pokemon-image-5");
    const image6 = getByTestId("pokemon-image-6");
    const image7 = getByTestId("pokemon-image-7");
    
    fireEvent.press(button);
    expect(tree.length).toBe(1);
    expect(image0.props.source.uri).toBe(pokemonInformation.sprites.front_default);
    expect(image1.props.source.uri).toBe(pokemonInformation.sprites.back_default);
    expect(image2.props.source.uri).toBe(pokemonInformation.sprites.front_female);
    expect(image3.props.source.uri).toBe(pokemonInformation.sprites.back_female);
    expect(image4.props.source.uri).toBe(pokemonInformation.sprites.front_shiny);
    expect(image5.props.source.uri).toBe(pokemonInformation.sprites.back_shiny);
    expect(image6.props.source.uri).toBe(pokemonInformation.sprites.front_shiny_female);
    expect(image7.props.source.uri).toBe(pokemonInformation.sprites.back_shiny_female);
    expect(getByText("Blaziken")).toBeTruthy();
    expect(getByTestId("pokemon-detail-header")).toBeTruthy();
    expect(getByTestId("pokeball")).toBeTruthy();
  });
});

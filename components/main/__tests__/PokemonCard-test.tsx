import { render } from "@testing-library/react-native";

import PokemonCard from "../PokemonCard";

describe("<PokemonCard />", () => {
  test("Text renders correctly on PokemonCard", () => {
    const item = {
      name: "charizard",
      url: "https://www.github.com",
    }
    const { getByText } = render(
      <PokemonCard
        item={item}
        onDetailPressItem={() => null}
        index={0}
        pokemonName={[]}
      />
    );

    getByText("Name: Charizard");
  });
});

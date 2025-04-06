import { render, fireEvent } from "@testing-library/react-native";

import PokemonCard from "../";

describe("<PokemonCard />", () => {
  test("Text renders correctly on PokemonCard", () => {
    const item = {
      name: "charizard",
      url: "https://www.github.com",
    }
    const { getByText, getByTestId, queryAllByTestId } = render(
      <PokemonCard
        item={item}
        onDetailPressItem={jest.fn()}
        index={0}
        pokemonName={[]}
      />
    );

    const tree = queryAllByTestId("pokemon-card");
    const button = getByTestId("pokemon-card");

    fireEvent.press(button);
    expect(tree.length).toBe(1);
    expect(button).toBeTruthy();
    expect(getByText("Name: Charizard")).toBeTruthy();
  });
});

import { render } from "@testing-library/react-native";

import PokemonDetailCell from "../";

describe("<PokemonDetailCell />", () => {
  test("Text renders correctly on PokemonDetailCell", () => {
    const { getByText, getByTestId, queryAllByTestId } = render(
      <PokemonDetailCell
        index={0}
        name="blaziken"
      />
    );

    const tree = queryAllByTestId("pokemon-detail-cell");

    expect(tree.length).toBe(1);
    expect(getByTestId("pokemon-detail-cell")).toBeTruthy();
    expect(getByText("Blaziken")).toBeTruthy();
  });
});

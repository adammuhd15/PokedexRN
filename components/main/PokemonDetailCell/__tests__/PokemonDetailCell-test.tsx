import { render } from "@testing-library/react-native";

import PokemonDetailCell from "../";

describe("<PokemonDetailCell />", () => {
  test("Text renders correctly on PokemonDetailCell", () => {
    const { getByText } = render(
      <PokemonDetailCell
        index={0}
        name="blaziken"
      />
    );

    getByText("Blaziken");
  });
});

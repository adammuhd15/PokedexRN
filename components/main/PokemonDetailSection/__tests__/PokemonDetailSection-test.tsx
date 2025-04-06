import { View } from "react-native";
import { render } from "@testing-library/react-native";

import PokemonDetailSection from "../";

describe("<PokemonDetailSection />", () => {
  test("Text renders correctly on PokemonDetailSection", () => {
    
    const { getByText, getByTestId, queryAllByTestId } = render(
      <PokemonDetailSection
        title="Flamethrower"
        children={<View />}
      />
    );

    const tree = queryAllByTestId("pokemon-detail-section");

    expect(tree.length).toBe(1);
    expect(getByTestId("pokemon-detail-section")).toBeTruthy();
    expect(getByText("Flamethrower")).toBeTruthy();
  });
});

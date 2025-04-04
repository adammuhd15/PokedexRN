import { View } from "react-native";
import { render } from "@testing-library/react-native";

import PokemonDetailSection from "../PokemonDetailSection";

describe("<PokemonDetailSection />", () => {
  test("Text renders correctly on PokemonDetailSection", () => {
    
    const { getByText } = render(
      <PokemonDetailSection
        title="Flamethrower"
        children={<View />}
      />
    );

    getByText("Flamethrower");
  });
});

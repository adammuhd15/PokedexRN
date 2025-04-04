import { render } from "@testing-library/react-native";

import Pokeball from "../Pokeball";

describe("<Pokeball />", () => {
  test("Pokeball renders correctly", () => {
    const { getByTestId } = render(<Pokeball />);

    getByTestId("pokeballTestID");
  });
});

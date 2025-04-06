import { render } from "@testing-library/react-native";

import Pokeball from "../";

describe("<Pokeball />", () => {
  test("Pokeball renders correctly", () => {
    const { getByTestId, queryAllByTestId } = render(<Pokeball />);

    const tree = queryAllByTestId("pokeball");

    expect(tree.length).toBe(1);
    expect(getByTestId("pokeball")).toBeTruthy();
  });
});

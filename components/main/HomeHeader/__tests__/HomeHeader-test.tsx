import { render } from "@testing-library/react-native";

import HomeHeader from "../";

describe("<HomeHeader />", () => {
  test("HomeHeader renders correctly", () => {
    const { getByText, getByTestId, queryAllByTestId } = render(<HomeHeader safeInsetsTop={100} />);

    const tree = queryAllByTestId("home-header");

    expect(tree.length).toBe(1);
    expect(getByTestId("home-header")).toBeTruthy();
    expect(getByTestId("pokeball")).toBeTruthy();
    expect(getByText("Pokedex")).toBeTruthy();
  });
});

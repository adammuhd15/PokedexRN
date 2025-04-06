import { render } from "@testing-library/react-native";

import BottomTabProfileImage from "../";

describe("<BottomTabProfileImage />", () => {
  test("BottomTabProfileImage renders correctly", () => {
    const { getByTestId, queryAllByTestId } = render(
      <BottomTabProfileImage
        size={20}
        focused
      />
    );

    const tree = queryAllByTestId("bottom-tab-profile-image");

    expect(tree.length).toBe(1);
    expect(getByTestId("bottom-tab-profile-image")).toBeTruthy();
  });
});

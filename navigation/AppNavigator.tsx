import React from "react";

// Local imports
import BottomTabNavigator from "./tabs/BottomTabNavigator";

const AppNavigator = () => {
  return (
    <>
      {true
        ? (
          <BottomTabNavigator />
        )
        : null
      }
    </>
  );
}

export default AppNavigator;

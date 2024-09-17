import React from "react";
import { View, Text } from "react-native";

// Local imports
import { SearchStackNavProps } from "../../navigation/stacks/main/SearchStackParamList";

const SearchScreen: React.FC<SearchStackNavProps<"Search">> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`Hello from ${props.route.name}`}</Text>
    </View>
  );
}

export default SearchScreen;

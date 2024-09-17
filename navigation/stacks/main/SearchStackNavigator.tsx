import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import SearchScreen from "../../../screens/main/SearchScreen";
import { SearchStackParamList } from "./SearchStackParamList";

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        // options={{ headerShown: false }}
        // options={{ header: () => null }}
      />
    </SearchStack.Navigator>
  );
}

export default SearchStackNavigator;

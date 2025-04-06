import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Local imports
import HomeScreen from "../../../screens/main/HomeScreen";
import PokemonDetailScreen from "../../../screens/main/PokemonDetailScreen";
import { HomeStackParamList } from "./HomeStackParamList";
import HomeHeader from "../../../components/main/HomeHeader";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  const safeInsets = useSafeAreaInsets();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <HomeHeader safeInsetsTop={safeInsets.top} />
          ),
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={PokemonDetailScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;

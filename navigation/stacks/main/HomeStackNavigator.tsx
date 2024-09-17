import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import HomeScreen from "../../../screens/main/HomeScreen";
import PokemonDetailScreen from "../../../screens/main/PokemonDetailScreen";
import { HomeStackParamList } from "./HomeStackParamList";
import HomeHeader from "../../../components/main/HomeHeader";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <HomeHeader />
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

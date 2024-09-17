import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Local imports
import HomeStackNavigator from "../stacks/main/HomeStackNavigator";
import SearchStackNavigator from "../stacks/main/SearchStackNavigator";
import ProfileStackNavigator from "../stacks/main/ProfileStackNavigator";
import { BottomTabParamList } from "./BottomTabParamList";
import * as Colors from "../../constants/Colors";
import BottomTabProfileImage from "../../components/main/BottomTabProfileImage";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SearchStack") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "ProfileStack") {
            return (
              <BottomTabProfileImage
                focused={focused}
                size={size}
              />
            );
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: Colors.primaryTheme,
        tabBarInactiveTintColor: Colors.grey,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          // tabBarBadge: true ? `9` : undefined,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

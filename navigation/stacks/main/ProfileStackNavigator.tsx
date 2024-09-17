import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import ProfileScreen from "../../../screens/main/ProfileScreen";
import { ProfileStackParamList } from "./ProfileStackParamList";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{ headerShown: false }}
        // options={{ header: () => null }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavigator;

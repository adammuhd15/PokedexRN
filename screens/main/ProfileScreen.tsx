import React from "react";
import { View, Text } from "react-native";

// Local imports
import { ProfileStackNavProps } from "../../navigation/stacks/main/ProfileStackParamList";

const ProfileScreen: React.FC<ProfileStackNavProps<"Profile">> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`Hello from ${props.route.name}`}</Text>
    </View>
  );
}

export default ProfileScreen;

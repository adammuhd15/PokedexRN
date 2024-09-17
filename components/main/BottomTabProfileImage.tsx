import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";

// Local imports
import * as Colors from "../../constants/Colors";
import {
  BottomTabProfileImageProps,
  BottomTabProfileImageStyleProps,
} from "./BottomTabProps";

const BottomTabProfileImage: React.FC<BottomTabProfileImageProps> = ({
  size,
  focused,
}) => {
  return (
    <View
      style={[tabProfileImageStyles.profileImageContainer, tabContainerStyle(size, focused)]}
    >
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        style={[tabProfileImageStyles.profileImageView, tabBarImageStyle(size)]}
      />
    </View>
  );
}

// Function for dynamic style
const tabContainerStyle = (size: number, focused: boolean): ViewStyle => ({
  width: size + 4,
  height: size + 4,
  borderRadius: (size / 2) + 2,
  borderColor: focused ? Colors.primaryTheme : Colors.white,
});

const tabBarImageStyle = (size: number): ImageStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
});

// StyleSheet
const tabProfileImageStyles = StyleSheet.create<BottomTabProfileImageStyleProps>({
  profileImageContainer: {
    backgroundColor: Colors.grey,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageView: {
    resizeMode: "cover",
  },
});

export default BottomTabProfileImage;

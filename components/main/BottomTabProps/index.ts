import {
  ImageStyle,
  ViewStyle,
} from "react-native";

export interface BottomTabProfileImageProps {
  size: number;
  focused: boolean;
};

export interface BottomTabProfileImageStyleProps {
  profileImageContainer: ViewStyle;
  profileImageView: ImageStyle;
};

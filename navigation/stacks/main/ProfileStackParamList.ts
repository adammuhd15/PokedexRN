import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProfileStackParamList = {
  Profile: undefined;
};

export type ProfileStackNavProps<T extends keyof ProfileStackParamList> = {
  navigation: NativeStackNavigationProp<ProfileStackParamList, T>;
  route: RouteProp<ProfileStackParamList, T>;
};

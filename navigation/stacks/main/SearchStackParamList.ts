import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type SearchStackParamList = {
  Search: undefined;
};

export type SearchStackNavProps<T extends keyof SearchStackParamList> = {
  navigation: NativeStackNavigationProp<SearchStackParamList, T>;
  route: RouteProp<SearchStackParamList, T>;
};

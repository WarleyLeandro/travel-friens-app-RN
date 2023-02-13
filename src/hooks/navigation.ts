import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  AppRoutesParams,
  FavoriteRoutesParams,
  HomeRoutesParams,
  InitialRoutesParams,
} from "../routes/routes";

export function useHomeNavigation() {
  const navigation = useNavigation<StackNavigationProp<HomeRoutesParams>>();
  return navigation;
}

export function useInitialNavigation() {
  const navigation = useNavigation<StackNavigationProp<InitialRoutesParams>>();
  return navigation;
}

export function useTabAPPNavigation() {
  const navigation = useNavigation<StackNavigationProp<AppRoutesParams>>();
  return navigation;
}

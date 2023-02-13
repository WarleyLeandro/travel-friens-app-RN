import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { FavoriteRoutesParams } from "../routes";

import { Favorite } from "../../screens/app/Favorite";

const { Navigator, Screen } = createStackNavigator<FavoriteRoutesParams>();

export function FavoriteRoutes() {
  return (
    <Navigator
      initialRouteName={"Favorite"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Favorite" component={Favorite} />
    </Navigator>
  );
}

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { MapsRoutesParams } from "../routes";

import { Maps } from "../../screens/app/Maps";

const { Navigator, Screen } = createStackNavigator<MapsRoutesParams>();

export function MapsRoutes() {
  return (
    <Navigator
      initialRouteName={"Maps"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Maps" component={Maps} />
    </Navigator>
  );
}

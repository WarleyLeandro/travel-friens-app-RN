import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ProfileRoutesParams } from "../routes";

import { Profile } from "../../screens/app/Profile";
import theme from "../../utils/theme";

const { Navigator, Screen } = createStackNavigator<ProfileRoutesParams>();

export function ProfileRoutes() {
  return (
    <Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown: true,
        title: "Conta",
        headerStyle: {},
        headerTintColor: theme.colors.title,
      }}
    >
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

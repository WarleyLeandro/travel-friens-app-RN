import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InitialRoutesParams } from "../routes";

import Terms from "../../screens/auth/Terms";

import SignIn from "../../screens/auth/SignIn";
import SignUp from "../../screens/auth/SignUp";
import ForgotPassword from "../../screens/auth/ForgotPassword";

const { Navigator, Screen } = createStackNavigator<InitialRoutesParams>();

export function InitialRoutes() {
  return (
    <Navigator
      initialRouteName={"Terms"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Terms" component={Terms} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}

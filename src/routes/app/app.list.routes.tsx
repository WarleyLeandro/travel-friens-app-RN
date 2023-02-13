import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ListRoutesParams } from "../routes";

import { List } from "../../screens/app/List";

const { Navigator, Screen } = createStackNavigator<ListRoutesParams>();

export function ListRoutes() {
  return (
    <Navigator
      initialRouteName={"List"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="List" component={List} />
    </Navigator>
  );
}

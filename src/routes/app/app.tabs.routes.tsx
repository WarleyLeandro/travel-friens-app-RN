import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { HomeRoutes } from "./app.home.routes";
import { FavoriteRoutes } from "./app.favorite.routes";
import { ListRoutes } from "./app.list.routes";
import { MapsRoutes } from "./app.maps.routes";
import { ProfileRoutes } from "./app.profile.routes";
import { AppRoutesParams } from "../routes";

import theme from "../../utils/theme";
const colors = theme.colors;
const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParams>();
export default function AppTabsRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.shape,
        tabBarInactiveTintColor: colors.secundary,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 80,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreens") {
            iconName = focused ? "home" : "home";
          }
          // else if (route.name === "ListScreens") {
          //   iconName = focused ? "book" : "book";
          // }
          else if (route.name === "MapsScreens") {
            iconName = focused ? "map" : "map-o";
          }
          if (route.name === "FavoriteScreens") {
            iconName = focused ? "heart" : "heart-o";
          } else if (route.name === "ProfileScreens") {
            iconName = focused ? "user-circle" : "user-circle-o";
          }
          //@ts-ignore
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName={"HomeScreens"}
    >
      <Screen
        name="HomeScreens"
        component={HomeRoutes}
        options={
          {
            //headerShown: true,
          }
        }
      />
      {/* <Screen name="ListScreens" component={ListRoutes} /> */}
      <Screen name="MapsScreens" component={MapsRoutes} />
      <Screen name="FavoriteScreens" component={FavoriteRoutes} />
      <Screen name="ProfileScreens" component={ProfileRoutes} />
    </Navigator>
  );
}

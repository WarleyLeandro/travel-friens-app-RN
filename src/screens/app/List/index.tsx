import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import theme from "../../../utils/theme";
import { style } from "./styles";

export function List() {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Text
          style={[
            style.title,
            { color: theme.colors.title, fontWeight: "600" },
          ]}
        >
          Agenda
        </Text>
      </View>
    </View>
  );
}

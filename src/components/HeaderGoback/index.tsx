import React from "react";
import { TouchableOpacity, View } from "react-native";

import theme from "../../utils/theme";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useHomeNavigation } from "../../hooks/navigation";
import TextApp from "../Text";

type HeaderProps = {
  title?: string;
  color: string;
  backgroundColor?: string;
};

export default function HeaderGoback({
  color,
  title,
  backgroundColor,
}: HeaderProps) {
  const navigation = useHomeNavigation();
  function navigateGoBack() {
    return navigation.goBack();
  }
  const { colors, fonts } = theme;
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity onPress={() => navigateGoBack()}>
        <MaterialIcons name="arrow-back-ios" size={20} color={color} />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 40 }}>
        <TextApp size={14} text={title || ""} />
      </View>
    </View>
  );
}

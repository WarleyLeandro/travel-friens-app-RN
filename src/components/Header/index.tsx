import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";

import { userHook } from "../../contexts/userData";

import TextApp from "../Text";
import theme from "../../utils/theme";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNotification } from "../../contexts/useNotification";
import { useHomeNavigation } from "../../hooks/navigation";

type HeaderProps = {
  notificationNum: number;
};

export default function Header({ notificationNum }: HeaderProps) {
  const user = userHook();
  const { colors, fonts } = theme;

  const navigation = useHomeNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextApp
          color={colors.shape}
          size={fonts.title}
          text={`Olá, ${user.userData.name}.`}
        />
        <TextApp color={colors.shape} size={fonts.text} text="O que planeja?" />
      </View>
      <View style={styles.bell}>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <FontAwesome name={"bell"} size={28} color={colors.fild} />
          <TextApp size={12} text={`${notificationNum}`} color={colors.shape} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

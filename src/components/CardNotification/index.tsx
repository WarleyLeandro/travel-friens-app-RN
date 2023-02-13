import React from "react";
import { TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";

import { INotification } from "../../contexts/useNotification";
import { formatDate } from "../../utils/formatDate";

type CardProps = {
  item: INotification;
};

export default function CardNotification({ item }: CardProps) {
  const backGround = {
    info: "#87CEFA",
    alert: "#EEE8AA",
    warning: "#FFB6C1",
  };

  const iconList = {
    info: "info-circle",
    alert: "exclamation-circle",
    warning: "warning",
  };

  const cardColor = backGround[item.type];
  const iconName = iconList[item.type];

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: cardColor }]}
    >
      <View style={styles.header}>
        <View style={styles.img}>
          <FontAwesome
            name={iconName || "warning"}
            size={28}
            color={cardColor}
          />
        </View>
        <View style={styles.textBox}>
          <TextApp
            size={theme.fonts.subText}
            text={item.title}
            isBold
            fontWeight="700"
            color={theme.colors.title}
          />
          <TextApp
            size={theme.fonts.subText}
            text={item.description}
            color={theme.colors.title}
            fontWeight="400"
          />
          <TextApp
            size={theme.fonts.subText}
            text={`${formatDate(item.date)}`}
            color={theme.colors.title}
            isBold
            fontWeight="400"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

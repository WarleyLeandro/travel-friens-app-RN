import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { RoadMap, TRoadmaps } from "../../@types/models.interface";
import { useHomeNavigation } from "../../hooks/navigation";
import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
type CardInfoProps = {
  item: RoadMap;
};

export default function CardInfo({ item }: CardInfoProps) {
  const navigation = useHomeNavigation();
  const backGround: TRoadmaps = {
    restaurante: "	#FF4500",
    loja: "#D8BFD8",
    museu: "#F4A460",
    igreja: "#7B68EE",
    praca: "#98FB98",
    parque: "#ADFF2F",
    shopping: "#87CEFA",
    arLivre: "#58d6ac",
    educacao: "#EE82EE",
  };

  const iconList: TRoadmaps = {
    restaurante: "cutlery",
    loja: "shopping-bag",
    museu: "bank",
    igreja: "home",
    praca: "leaf",
    parque: "pagelines",
    shopping: "gift",
    arLivre: "sun-o",
    educacao: "graduation-cap",
  };

  const cardColor = backGround[item.type];
  const iconName = iconList[item.type];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Roadmap", item)}
      key={item._id}
    >
      <View style={styles.header}>
        <View style={[styles.img, { backgroundColor: cardColor }]}>
          <FontAwesome name={iconName} size={28} color={"white"} />
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
            text={` ${item.start} - ${item.end}`}
            color={theme.colors.title}
            fontWeight="400"
          />
          <TextApp
            size={theme.fonts.subText}
            text={item.isFree ? "Gratuito" : `Valor: R$ ${item.price}`}
            color={theme.colors.text}
            fontWeight="400"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TextApp
          size={theme.fonts.subText}
          text={`${item.description}`}
          color={theme.colors.text}
        />
      </View>
    </TouchableOpacity>
  );
}

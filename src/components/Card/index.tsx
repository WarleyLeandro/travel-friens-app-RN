import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { RoadMap, TRoadmaps } from "../../@types/models.interface";
import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
import { userHook } from "../../contexts/userData";
import { useHomeNavigation } from "../../hooks/navigation";

type CardProps = {
  item: RoadMap;
  hiden?: boolean;
};

export default function Card({ item, hiden = false }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(item.favorites);

  const { roadmapFavorite, setRoadmap_AS } = userHook();

  const navigation = useHomeNavigation();

  const changeStatusFavorite = async (id: RoadMap["_id"]) => {
    const newRoad = roadmapFavorite.map((road) => {
      return road._id === id ? { ...road, favorites: !road.favorites } : road;
    });

    await setRoadmap_AS(newRoad);
    setIsFavorite(!isFavorite);
  };

  const backGround: TRoadmaps = {
    restaurante: "	#FF4500",
    loja: "#D8BFD8",
    museu: "#F4A460",
    igreja: "#7B68EE",
    praca: "#98FB98",
    parque: "#ADFF2F",
    shopping: "#87CEFA",
    arLivre: "#7FFFD4",
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
        <View
          style={{
            alignSelf: "flex-end",

            alignItems: "flex-end",

            flex: 1,
          }}
        >
          {hiden ? null : (
            <TouchableOpacity onPress={() => changeStatusFavorite(item._id)}>
              {isFavorite ? (
                <FontAwesome name={"heart"} size={28} color={"red"} />
              ) : (
                <FontAwesome name={"heart-o"} size={28} color={"gray"} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

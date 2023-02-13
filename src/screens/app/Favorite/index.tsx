import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { RoadMap } from "../../../@types/models.interface";
import Card from "../../../components/Card";
import TextApp from "../../../components/Text";

import theme from "../../../utils/theme";

import { style } from "./styles";
import { userHook } from "../../../contexts/userData";

export function Favorite() {
  const { roadmapFavorite } = userHook();

  function renderVertical(item: RoadMap) {
    if (item.favorites) {
      return <Card item={item} hiden />;
    }
  }
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={style.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />

        <View
          style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 14 }}
        >
          <TextApp
            size={theme.fonts.title}
            text={"Meus favoritos"}
            isBold
            color={theme.colors.title}
          />
        </View>

        <View style={{ width: "100%" }}>
          {roadmapFavorite.length === 0 ? (
            <ActivityIndicator color={theme.colors.primary} size="large" />
          ) : null}
          {!!roadmapFavorite ? (
            <FlatList
              snapToAlignment={"start"}
              scrollEventThrottle={16}
              decelerationRate={"fast"}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, i) => `${item}${i}`}
              data={roadmapFavorite}
              renderItem={({ item }) => renderVertical(item)}
              style={{}}
              ListFooterComponent={<View style={{ height: 340 }} />}
              ListEmptyComponent={
                <View>
                  <TextApp size={12} text={"Não há favoritos..."} />
                </View>
              }
            />
          ) : (
            <TextApp size={12} text="carregando lista de roteiros..." />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

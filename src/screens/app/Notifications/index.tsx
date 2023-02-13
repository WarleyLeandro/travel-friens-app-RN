import React from "react";
import {
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import TextApp from "../../../components/Text";

import theme from "../../../utils/theme";

import { style } from "./styles";
import { userHook } from "../../../contexts/userData";
import {
  INotification,
  useNotification,
} from "../../../contexts/useNotification";
import CardNotification from "../../../components/CardNotification";
import HeaderGoback from "../../../components/HeaderGoback";

export default function Notifications() {
  const { notificatioList } = useNotification();

  function renderVertical(item: INotification) {
    return <CardNotification item={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={style.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <HeaderGoback color={theme.colors.text} />

        <View style={{ paddingHorizontal: 20, paddingBottom: 14 }}>
          <TextApp
            size={theme.fonts.title}
            text={"Notificações"}
            isBold
            color={theme.colors.title}
          />
        </View>

        <View style={{ width: "100%" }}>
          {notificatioList.length === 0 ? (
            <ActivityIndicator color={theme.colors.primary} size="large" />
          ) : null}
          {!!notificatioList ? (
            <FlatList
              snapToAlignment={"start"}
              scrollEventThrottle={16}
              decelerationRate={"fast"}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, i) => `${item}${i}`}
              data={notificatioList}
              renderItem={({ item }) => renderVertical(item)}
              style={{}}
              ListFooterComponent={<View style={{ height: 340 }} />}
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Alert, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Button from "../../../components/Button";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

import { style } from "./styles";
import { HomeRoutesParams } from "../../../routes/routes";
import HeaderGoback from "../../../components/HeaderGoback";
import { getLocalById } from "../../../services/api/app/local";
import { userHook } from "../../../contexts/userData";
import { updateRoadmapUserList } from "../../../services/api/app/roteiros";
import { useNotification } from "../../../contexts/useNotification";

type RoadmapScreenProps = RouteProp<HomeRoutesParams, "Roadmap">;

export default function Roadmap() {
  const { params } = useRoute<RoadmapScreenProps>();

  const { inRoadmapNotification } = useNotification();

  const { userData } = userHook();

  const [local, setLocal] = useState<Local[]>([] as Local[]);
  const [latitude, setLatitude] = useState<number>(-19.93266);
  const [longitude, setLongitude] = useState<number>(-43.93859);

  async function loadDataLocal() {
    const { data, status } = await getLocalById(params.idLocal);
    if (status === 200) {
      setLocal(data);

      setLatitude(data?.location["lat"]);
      setLongitude(data?.location["lng"]);
    }
  }

  useEffect(() => {
    loadDataLocal();
  }, []);

  async function handleSignIn() {
    const newParticipants = [...params.participants, { idUser: userData.id }];

    const { data, status } = await updateRoadmapUserList(
      newParticipants,
      params._id
    );

    if (status === 200) {
      const title = params.title;
      inRoadmapNotification(title);

      Alert.alert("Que bom que você vai...", "Curta seu passeio com a Travel");
    } else {
      console.log("error cadastro");
    }
  }

  return (
    //TODO: pegar latitude e long do local

    <View style={style.container}>
      <HeaderGoback color={theme.colors.text} title={params.title} />
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={style.map}
        minZoomLevel={16}
        loadingEnabled
        showsUserLocation
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
      <View style={style.content}>
        <View style={style.header}>
          <View>
            <TextApp
              size={theme.fonts.subTitle}
              text={params?.title}
              isBold
              fontWeight="700"
              color={theme.colors.title}
            />
            <TextApp
              size={theme.fonts.subText}
              text={` ${params.start} - ${params.end}`}
              color={theme.colors.title}
              fontWeight="400"
            />
          </View>
          <View style={style.headerPrice}>
            <TextApp
              size={theme.fonts.subTitle}
              text={params.isFree ? "Gratuito" : ` R$ ${params.price}`}
              color={theme.colors.primary_30}
              fontWeight="400"
              isBold
            />
          </View>
        </View>
        <View style={style.body}>
          <TextApp
            size={theme.fonts.subTitle}
            text={"Descrição"}
            color={theme.colors.title}
            isBold
          />
          <TextApp
            size={theme.fonts.subText}
            text={`${params?.description}`}
            color={theme.colors.text}
          />
          <View
            style={{
              paddingTop: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <TextApp
                size={theme.fonts.subTitle}
                text={"Local"}
                color={theme.colors.title}
                isBold
              />
              <TextApp
                size={theme.fonts.subText}
                text={` ${local?.name || ""}  `}
                color={theme.colors.text}
              />
              <TextApp
                size={theme.fonts.subText}
                text={` ${local?.address || ""}  `}
                color={theme.colors.text}
              />
              <TextApp
                size={theme.fonts.subText}
                text={` ${local?.cep || ""}  `}
                color={theme.colors.text}
              />
            </View>
            <View>
              <TextApp
                size={theme.fonts.subTitle}
                text={"Participantes"}
                color={theme.colors.title}
                isBold
              />
              <TextApp
                size={theme.fonts.subText}
                text={` ${params.participants.length} de ${params.person} `}
                color={theme.colors.text}
              />
            </View>
          </View>
        </View>
        <View style={style.footer}>
          <Button onPress={() => handleSignIn()} title="Inscreva-se" />
        </View>
      </View>
    </View>
  );
}

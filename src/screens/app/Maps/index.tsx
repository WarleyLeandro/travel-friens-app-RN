import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getAllLocal } from "../../../services/api/app/local";
import theme from "../../../utils/theme";

import { style } from "./styles";

export function Maps() {
  const [region, setRegion] = useState(null);
  const [latitude, setLatitude] = useState<number>(-19.93266);
  const [longitude, setLongitude] = useState<number>(-43.93859);

  const [local, setLocal] = useState<Local[]>([] as Local[]);

  async function loadDataLocal() {
    const { data, status } = await getAllLocal();
    if (status === 200) {
      setLatitude(data[0]?.location["lat"]);
      setLongitude(data[0]?.location["lng"]);
      setLocal(data);
    }
  }

  useEffect(() => {
    loadDataLocal();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={style.container}>
        <MapView
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={style.map}
          loadingEnabled
        >
          {local.map((item, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: item?.location["lat"],
                longitude: item?.location["lng"],
              }}
              title={item?.name}
              description={item?.address}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
}
//TODO: colocar os pins do mapas dos roteiros

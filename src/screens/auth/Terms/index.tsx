import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";
import { term } from "./mock";

import Button from "../../../components/Button";

import { styles } from "./styles";
import theme from "../../../utils/theme";

export default function Terms() {
  const navigation = useInitialNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Termo de uso</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.textContent}>{term}</Text>
        </View>
      </ScrollView>
      <View
        style={{ paddingVertical: 30, backgroundColor: theme.colors.shape }}
      >
        <Button title="Aceitar" onPress={() => navigation.navigate("SignIn")} />
      </View>
    </View>
  );
}

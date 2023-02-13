import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    width: width,
    flex: 1,

    alignItems: "center",
    backgroundColor: theme.colors.shape,
  },
});

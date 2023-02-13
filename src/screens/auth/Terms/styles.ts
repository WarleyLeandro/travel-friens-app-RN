import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.fild,
  },
  header: {
    paddingVertical: 60,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 40,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.shape,
  },
  title: {
    color: theme.colors.title,
    fontSize: 34,
    fontWeight: "600",
  },
  textContent: {
    color: theme.colors.text,
    textAlign: "auto",
  },
});

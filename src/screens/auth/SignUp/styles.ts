import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.fild,
  },
  header: {
    padding: 20,
  },
  content: {
    flex: 1,

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
});

import { StyleSheet, Dimensions } from "react-native";

import theme from "../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    color: theme.colors.text,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.text,
    height: 50,
    padding: 6,
    marginTop: 4,
  },
});

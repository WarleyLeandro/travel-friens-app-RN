import { StyleSheet, Dimensions } from "react-native";
import theme from "../../utils/theme";

const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    width: width * 0.88,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
  },
  buttonTransparent: {
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    justifyContent: "center",
    width: width * 0.88,
    alignItems: "center",
    alignSelf: "center",
  },
  titleTransparent: {
    color: theme.colors.primary,
    fontSize: 22,
  },
});

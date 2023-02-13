import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.colors.shape,
  },
  logo: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  content: {
    padding: 30,
    alignItems: "center",
    backgroundColor: theme.colors.secundary,
    width: width,
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: theme.colors.shape,
    fontWeight: "600",
    fontSize: 24,
  },
  text: {
    paddingTop: 20,
    fontSize: 14,
    textAlign: "justify",
    color: theme.colors.shape,
  },
  button: {
    borderRadius: 6,
    backgroundColor: theme.colors.yellow,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  buttonTitle: {
    color: theme.colors.title,
    padding: 16,
    fontWeight: "600",
    fontSize: 20,
  },
});

import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.shape,
  },
  map: {
    width: width,
    height: "30%",
  },
  content: {
    flex: 1,
    marginTop: -15,
    padding: 20,
    backgroundColor: theme.colors.shape,
    width: width,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  header: {
    paddingTop: 32,
    flexDirection: "row",
  },
  headerPrice: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "flex-end",
  },
  body: {
    paddingVertical: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",

    flex: 1,
    alignItems: "flex-end",
  },
});

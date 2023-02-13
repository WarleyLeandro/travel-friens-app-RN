import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: theme.colors.shape,
  },
  headerProfile: {
    justifyContent: "space-around",
    alignItems: "center",

    paddingVertical: 10,
    height: "40%",
    width: width,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  nickName: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 6,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    height: 100,
    width: 100,
  },
  underlineProfile: {
    alignItems: "center",
    borderBottomWidth: 0.5,
    width: "80%",
  },
  underlineButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,

    width: "100%",
  },
  bodyProfile: {
    alignItems: "center",
    height: "50%",
  },
  menuProfile: {
    height: "100%",
    width: width * 0.8,
    paddingTop: 20,
    marginHorizontal: 20,
  },
});

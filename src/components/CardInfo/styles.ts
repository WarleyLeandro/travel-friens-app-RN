import { StyleSheet, Dimensions } from "react-native";

import theme from "../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    padding: 20,
    borderRadius: 6,
    width: width * 0.8 - 20,
    //height: width / 3.2,

    marginHorizontal: 10,
    marginVertical: 10,

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
    flexDirection: "row",
    padding: 4,
  },
  footer: {
    marginTop: 4,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: theme.colors.secundary,
    borderRadius: 6,
  },
  textBox: {
    paddingHorizontal: 8,
  },
});

import { StyleSheet, Dimensions } from "react-native";

import theme from "../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    padding: 10,
    width: "92%",
    borderRadius: 6,

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
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },

  img: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: theme.colors.shape,
    borderRadius: 6,
  },
  textBox: {
    paddingHorizontal: 16,
    //backgroundColor: "red",
    width: "90%",
  },
});

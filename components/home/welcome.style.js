import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 5,
    marginTop: top,
    color: color,
  }),
});

export default styles;

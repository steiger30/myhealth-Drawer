import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
export const styles = StyleSheet.create({
  drawerLabel: {
    marginLeft: -25,
    fontSize: 20,
    fontFamily: "AveriaLibre",
    color: colors.blue_300,
  },
  drawerContentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  drawerItemIcon: {
    width: 30,
    height: 30,
  },
});

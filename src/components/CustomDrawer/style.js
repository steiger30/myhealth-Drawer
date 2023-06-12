import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_050,

    user: {
      justifyContent: "center",
      alignItems: "center",
      height: 150,
    },
  },
  textUser: {
    fontSize: 30,
    marginRight: 10,
    fontFamily: "AveriaLibre",
    color: colors.blue_300,
    marginBottom: 20
  },
});

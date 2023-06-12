import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.blue_200,
    justifyContent: "center",
    alignItems: "center",
    cards: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    pesquisa: {
      flex: 4,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  },

  inputContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    margin: 20,
  },
  icon: {
    marginRight: 10,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

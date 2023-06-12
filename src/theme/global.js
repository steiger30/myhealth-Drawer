import { StyleSheet } from "react-native";
import colors from "./colors";
export const global = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 128,
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    text: {
      fontSize: 18,
      fontFamily: "AveriaLibre",
      color: colors.white,
    },
  },
  labelInput: {
    fontSize: 17,
    marginRight: 10,
    fontFamily: "AveriaLibre",
    color: colors.white,
  },

  input: {
    height: 31,
    backgroundColor: colors.white,
    color: colors.blue_300,
    paddingLeft: 10,
    fontSize: 17,
  },
  textColorBlue: {
    color: colors.blue_300,
  },
  btnRed: {
    backgroundColor: colors.red,
  },
  btnGreen: {
    backgroundColor: colors.green,
  },
  btnBlue: {
    backgroundColor: colors.blue_400,
  },

  inputWidth: {
    width: "50%",
  },
  dataInputWidth: {
    width: "30%",
  },
});

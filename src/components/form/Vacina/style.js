import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#add4d0",
    justifyContent: "center",
    alignItems: "center",

    TextInput: {
      flex: 3,
      width: "100%",
      padding: 10,
      justifyContent: "center",
    },
    button: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    buttonEdit: {
      flex: 1,
      justifyContent: "flex-end",
    },
    radio: {
      flexDirection: "row-reverse",
      flexWrap: "wrap",
      alignItems: "center",
    },

    input: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
  },

  text: {
    textInput: {
      width: "40%",
      textAlign: "right",
      fontFamily: "AveriaLibre",
    },
    textRadio: {
      fontFamily: "AveriaLibre",
      textAlign: "right",
    },
  },

  input: {
    minHeight: 31,
    marginRight: 10,
    fontSize: 17,
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    fontFamily: "AveriaLibre",
  },
  Hbutton: {
    height: 35,
  },
});

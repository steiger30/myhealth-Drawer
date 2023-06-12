import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#add4d0',
    justifyContent: 'center',
    alignItems: 'center',

    TextInput: {
      flex: 3,
      width: '100%',
      padding: 10,
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    radio: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },

    input: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
  },
  inputWidth: {
    width: '55%',
  },

  text: {
    textInput: {
      width: '35%',
      textAlign: 'right',
      fontFamily: 'AveriaLibre',
    },
    textRadio: {
      fontFamily: 'AveriaLibre',
      textAlign: 'right',
    },
  },

  input: {
    height: 31,
    marginRight: 10,
    fontSize: 17,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontFamily: 'AveriaLibre',
  },
});

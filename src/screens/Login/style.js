import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.blue_200,
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
      flexDirection: 'row',
    },
    button: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  },
  inputWidth: {
    width: 280,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  box: {
    width: 100,
    height: 100,
  },
  text: {
    title: {
      fontFamily: 'AveriaLibre',
      fontSize: 50,
      textDecorationLine: 'underline',
    },
    paragraph: {
      fontFamily: 'AveriaLibre',
      fontSize: 33,
      paddingHorizontal: 15,
      textAlign: 'center',
    },
  },
  entrar: {
    backgroundColor: colors.green,
  },
  newConta: {
    backgroundColor: colors.blue_300,
  },
  esqueciSenha: {
    backgroundColor: colors.gray_100,
  },
});

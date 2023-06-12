import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
    backgroundColor: colors.blue_200,
    justifyContent: 'center',
    alignItems: 'center',
    card: {
      marginTop: 80,
      flex: 2,
      width: '95%',
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  buttonW: {
    maxWidth: 128,
  },
});

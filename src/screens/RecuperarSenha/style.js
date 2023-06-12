import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.blue_200,
    justifyContent: 'center',
    alignItems: 'center',

    TextInput: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
  },
  inputWidth: {
    width: 280,
  },
});

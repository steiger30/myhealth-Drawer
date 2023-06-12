import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    padding: 12
  },
  header: {
    color: colors.blue_400,
    fontSize: 28,
    fontFamily: 'AveriaLibre',
  },
  footer: {
    color: colors.gray_600,
    fontSize: 20,
    fontFamily: 'AveriaLibre',
  },
});

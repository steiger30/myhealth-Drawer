import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 184,
    height: 215,
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 6,
    padding: 2,
    TextproxVacina: {
      width: '100%',
    },
  },
  vacina: {
    fontSize: 25,
    color: colors.blue_400,
    fontFamily: 'AveriaLibre',
    textAlign: 'center',
  },
  inputWidth: {
    width: 280,
  },
  imgVacina: {
    width: '100%',
    height: 80,
  },
  proxVacina: {
    color: colors.red,
    textAlign: 'right',
    fontSize: 13,
    fontFamily: 'AveriaLibre',
  },
  dataAplicada: {
    color: colors.gray_600,
    fontSize: 16,
    fontFamily: 'AveriaLibre',
  },
  dose: {
    paddingHorizontal: 9,
    paddingTop: 2,
    paddingBottom: 2
  }
});

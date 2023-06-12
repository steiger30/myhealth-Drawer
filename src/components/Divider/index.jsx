import { View, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: colors.blue_300,
    marginVertical: 10,
  },
});
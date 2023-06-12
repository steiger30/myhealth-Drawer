import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Text, View } from 'react-native'
import colors from '../../theme/colors';
import { styles } from './style';
import { Divider } from '../Divider';
const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container.user}>
          <Text style={styles.textUser}>Olá John Doe</Text>
          <Divider />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer
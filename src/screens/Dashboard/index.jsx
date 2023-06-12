import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from "./screens/Home"
import Adicionar from "./screens/Vacina/Adicionar"
import ProximasVacinas from "./screens/Vacina/ProximasVacinas"
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditarVacina from './screens/Vacina/Editar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CustomDrawer from '../../components/CustomDrawer';
import { styles } from './style';
import { useEffect } from 'react';
import { screenOptions } from '../../util/screenOptions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


const EmptyScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('Login');
  }, []);

  return null;
};

const Dashboard = () => {

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeStack} options={{ title: "Minhas vacinas", headerShown: false }}></Stack.Screen>
      <Stack.Screen name="Adicionar" component={Adicionar} options={{ title: "Nova vacina" }}></Stack.Screen>
      <Stack.Screen name="EditarVacina" component={EditarVacina} options={{ title: "Editar vacina" }}></Stack.Screen>
      <Stack.Screen name="ProximasVacinas" component={ProximasVacinas} options={{ title: "Próximas vacinas", headerShown: false }}></Stack.Screen>
    </Stack.Navigator >

  )
}

const HomeStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{ ...screenOptions, drawerLabelStyle: styles.drawerLabel }}
    >
      <Drawer.Screen name="DashboardHome" component={Home} options={{
        title: "Minhas vacinas",
        drawerIcon: () => (
          <Image source={require('../../../assets/icons/icon-vaccine.png')} style={styles.drawerItemIcon} />
        )
      }} />

      <Drawer.Screen name="ProximasVacinas" component={ProximasVacinas} options={{
        title: "Próximas vacinas",

        drawerIcon: () => (
          <Image source={require('../../../assets/icons/calendar.png')} style={styles.drawerItemIcon} />
        )
      }} />

      <Drawer.Screen
        name="Sair"
        component={EmptyScreen}
        options={{
          title: "Sair",
          drawerIcon: () => (
            <Image
              source={require('../../../assets/icons/logout-green.png')}
              style={styles.drawerItemIcon}
            />
          ),
        }}
      />
    </Drawer.Navigator >
  )
}


export default Dashboard
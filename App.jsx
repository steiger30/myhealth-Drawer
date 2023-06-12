import React, { useState } from "react";
import { useFonts } from "expo-font";
import Login from "./src/screens/Login";
import CriarConta from "./src/screens/CriarConta";
import { ActivityIndicator } from "react-native";
import Dashboard from "./src/screens/Dashboard/index.jsx";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { screenOptions } from "./src/util/screenOptions";


export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaLibre: require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });

  const Stack = createStackNavigator();

  const [isLoading, setIsLoading] = useState(true);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {


    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false,
            headerStyle: styles.screenContainer,
            headerTitleStyle: styles.screenText
          }} />
          <Stack.Screen name="NovaConta" component={CriarConta} options={{ title: 'Nova Conta' }} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'MyHealth' }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Define a cor de fundo desejada
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Define a cor de fundo desejada
  },
  screenText: {
    fontSize: 16, // Define o tamanho da fonte desejada
    color: '#000', // Define a cor do texto desejada
  },
});
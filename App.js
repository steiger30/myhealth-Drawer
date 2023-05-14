import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
function Feed() {
  return (
    <View>
      <Text>Este é o feed!</Text>
    </View>
  );
}

function Article() {
  return (
    <View>
      <Text>Este é o artigo!</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

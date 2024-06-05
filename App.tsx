import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text } from "react-native";


import Home from "./pages/Home";
import Espisode from "./pages/Espisode";
import Interest from "./pages/Interest";
import LoginPage from "./pages/LoginPage";
import Save from "./pages/Save";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Now in Android"
          component={Home}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity onPress={() => console.log("handle")}>
                <Text>Back</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity onPress={() => console.log("handle")}>
                <Text>Back</Text>
              </TouchableOpacity>
            ),
            // tabBarIcon: ({ color, size }) => (
            //   // <Icon name="home" color={color} size={size} />
            // ),
          })}
        />
        <Tab.Screen
          name="Espisode"
          component={Espisode}
          options={({ navigation }) => ({
            // tabBarIcon: ({ color, size }) => (
            //   // <Icon name="home" color={color} size={size} />
            // ),
          })}
        />
        <Tab.Screen
          name="Saved"
          component={Save}
          options={({ navigation }) => ({
            // tabBarIcon: ({ color, size }) => (
            //   // <Icon name="home" color={color} size={size} />
            // ),
          })}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerShown: false,
            // tabBarIcon: ({ color, size }) => (
            //   <Icon name="address-card" color={color} size={size} />
            // ),
          })}
          name="Interest"
          component={Interest}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="Root"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="LoginPage"
          options={{ headerShown: false }}
          component={LoginPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <Tab.Navigator
        backBehavior="history"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarIconStyle: {
            borderRadius: 40,

            borderColor: "#D46A83",
          },
          tabBarStyle: {
            height: 80, // Set your desired height in pixels
          },
          tabBarLabelStyle: {
            borderBottomWidth: 20,
            borderBottomColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="For you"
          component={Home}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerTitle: "Now in Android",
            headerLeft: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity onPress={() => console.log("handle")}>
                <Icon name="search" style={styles.headerButton} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity onPress={() => console.log("handle")}>
                <Icon name="user" style={styles.headerButton} />
              </TouchableOpacity>
            ),
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Espisode"
          component={Espisode}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Icon name="book" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Saved"
          component={Save}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Icon name="save" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
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
const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 16, // Adjust padding as needed
    fontSize: 20,
  },
});

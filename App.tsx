import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

import Home from "./pages/Home";
import Espisode from "./pages/Espisode";
import Interest from "./pages/Interest";
import LoginPage from "./pages/LoginPage";
import Save from "./pages/Save";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator
        backBehavior="history"
        screenOptions={{
          tabBarActiveTintColor: "pink",
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            // height: 80, // Set your desired height in pixels
            display: "flex",
            position: "absolute",
            bottom: 20,
            left: 25,
            right: 25,
            elevation: 5,
            backgroundColor: "white",
            borderRadius: 30,
            height: 60,
          },
          tabBarLabelStyle: {
            borderBottomWidth: 10,
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
            headerStyle: {
              backgroundColor: "#ffd6f0",
            },
            headerLeft: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchPage")}
              >
                <Icon name="magnifying-glass" style={styles.headerButton} />
              </TouchableOpacity>
            ),

            headerRight: () => (
              // Add the headerLeft function for the left button
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfilePage")}
              >
                <Icon name="user" style={styles.headerButton} />
              </TouchableOpacity>
            ),
            tabBarIcon: ({ color, size }) => (
              <Icon name="house" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Espisode"
          component={Espisode}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
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
        <Stack.Screen
          name="SearchPage"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#ffd6f0",
            },
          }}
          component={SearchPage}
        />
        <Stack.Screen
          name="ProfilePage"
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.replace("LoginPage")}>
                <Icon
                  name="arrow-right-from-bracket"
                  style={styles.headerButton}
                />
              </TouchableOpacity>
            ),
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#ffd6f0",
            },
            headerShadowVisible: false,
          })}
          component={Profile}
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

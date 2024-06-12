import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginCheck = {
    urname: "T",
    pass: "1",
  };

  const handleLogin = () => {
    console.log("Login clicked")
    if (username === loginCheck.urname && password === loginCheck.pass) {
      navigation.replace("Root");
      return;
    }
    Alert.alert(
      "Login Failed",
      "Invalid username or password. Please try again.",
      [{ text: "OK", onPress: () => console.log("Alert dismissed") }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEMO APP</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  loginErr: {
    color: "red",
  },
});

export default LoginPage;

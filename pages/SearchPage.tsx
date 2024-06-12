import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const focus = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState("");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  React.useEffect(() => {
    if (focus.current) {
      focus.current.focus();
    }
  }, []);

  // React.useEffect(() => {
  //   console.log(searchQuery);
  // }, [searchQuery]);

  const clearText = () => {
    setValue("");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const ref = React.useRef();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#FFE2EF", flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
            <Icon name="arrow-left" size={20} color="#999" />
          </TouchableOpacity>
          <TextInput
            ref={focus}
            style={styles.input}
            placeholder="Search..."
            value={value ?? ""}
            onChangeText={setValue}
          />
          <TouchableOpacity onPress={clearText} style={styles.cancelButton}>
            <Icon name="times-circle" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
      <View></View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 0.8,
  },
  cancelButton: {
    position: "relative",
    right: 25,
  },
  backIcon: {
    position: "relative",
    right: 20,
  },
});

export default SearchPage;

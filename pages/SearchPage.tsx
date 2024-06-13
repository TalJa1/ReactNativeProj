import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
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

  const clearText = () => {
    setValue("");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    console.log(`${value}`);
  };

  const ref = React.useRef();
  return (
    <View style={{ flex: 1, backgroundColor: "#FFE2EF" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <Icon name="arrow-left" size={20} color="#999" />
        </TouchableOpacity>
        <TextInput
          ref={focus}
          style={styles.input}
          placeholder="Search..."
          value={value ?? ""}
          onSubmitEditing={handleSearch}
          onChangeText={setValue}
        />
        <TouchableOpacity onPress={clearText} style={styles.cancelButton}>
          <Icon name="times-circle" size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchRecent}>
        <Text>Recent searches</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
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
  searchRecent: {
    paddingHorizontal: 15,
  },
});

export default SearchPage;

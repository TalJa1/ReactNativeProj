import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface HeaderSearchInputProps {
  value: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<HeaderSearchInputProps> = ({ value, onChange }) => {
  const focus = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (focus.current) {
      focus.current.focus();
    }
  }, []);

  const clearText = () => {
    onChange("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={focus}
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={clearText} style={styles.cancelButton}>
        <Icon name="times-circle" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  cancelButton: {
    position: "relative",
    right: 25,
    flex: 0.3,
  },
});
export default SearchInput;

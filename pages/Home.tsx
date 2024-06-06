import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState, useCallback } from "react";

interface User {
  name: string;
}

interface RenderUserProps {
  name: string;
}

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("is Refresh");
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const user: User[] = [
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
    {
      name: "st",
    },
  ];

  const RenderUser: React.FC<RenderUserProps> = ({ name }) => {
    return (
      <View>
        <View style={style.userDisp}>
          <Icon name="user" size={30} solid />
        </View>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#ffd6f0",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={style.textHeader}>What are you interested in?</Text>
        <Text style={style.textDes}>
          Updates from interests you follow will appear here. Follow some things
          to get started.
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView horizontal>
          {user.map((va, ind) => {
            return (
              <View
                key={ind}
                style={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <RenderUser name={va.name} />
              </View>
            );
          })}
        </ScrollView>
        <ScrollView></ScrollView>
      </View>
      <View style={{ flex: 1 }}></View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textHeader: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
  },
  textDes: {
    textAlign: "center",
    paddingTop: 16,
  },
  userDisp: {
    marginHorizontal: 15,
    borderRadius: 30,
    justifyContent: "center", // Center the icon vertically
    alignItems: "center", // Center the icon horizontally
    width: 60,
    height: 60,
    backgroundColor: "#EDDEE8",
  },
});

export default Home;

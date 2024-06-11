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

interface Item {
  name: string;
  icon: string;
}

const ITEMS_PER_COLUMN = 3;

const Home = () => {
  const columns = [];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("is Refresh");
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const DATA: Item[] = [
    { name: "name", icon: "home" },
    { name: "name", icon: "user" },
    { name: "name", icon: "home" },
    { name: "name", icon: "user" },
    { name: "name", icon: "home" },
    { name: "name", icon: "user" },
  ];

  const user: User[] = [
    {
      name: "John",
    },
    {
      name: "Lucy",
    },
    {
      name: "Luck",
    },
    {
      name: "Xiao Yan",
    },
    {
      name: "Luccy",
    },
    {
      name: "Luffy",
    },
    {
      name: "Lazy",
    },
    {
      name: "Dic",
    },
    {
      name: "How",
    },
  ];

  const RenderUser: React.FC<User> = ({ name }) => {
    return (
      <View>
        <View style={style.userDisp}>
          <Icon name="user" size={30} solid />
          <View style={style.plusSty}>
            <Icon name="plus" />
          </View>
        </View>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>
    );
  };

  for (let i = 0; i < DATA.length; i += ITEMS_PER_COLUMN) {
    const columnData = DATA.slice(i, i + ITEMS_PER_COLUMN);
    columns.push(columnData);
  }

  const RenderItem: React.FC<Item> = ({ name, icon }) => {
    return (
      <View style={style.content}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Icon name={icon} size={20} />
          <Text style={{ marginLeft: 10 }}>{name}</Text>
        </View>
        <Icon name="plus" size={20} />
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
        <ScrollView>
          {DATA.map((value, index) => {
            return (
              <View key={index}>
                <RenderItem name={value.name} icon={value.icon} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}></View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    width: "60%",
    height: 40,
    marginBottom: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
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
  plusSty: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    borderRadius: 20,
    width: 15,
    height: 15,
    backgroundColor: "white",
  },
});

export default Home;

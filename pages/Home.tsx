import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Image,
  TouchableOpacity,
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

interface Topic {
  name: string;
  isCheck: boolean;
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

  const topics: Topic[] = [
    { name: "Compose", isCheck: false },
    { name: "Topic", isCheck: true },
    { name: "Event", isCheck: false },
    { name: "Performence", isCheck: false },
    { name: "Movement", isCheck: false },
    { name: "Dramatic", isCheck: false },
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

  const RenderTopic: React.FC<Topic> = ({ name, isCheck }) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: isCheck ? "pink" : "gray",
          }}
        >
          {name}
        </Text>
      </View>
    );
  };

  const groupDataIntoColumns = (data: Item[], itemsPerColumn: number) => {
    const columns = [];
    for (let i = 0; i < data.length; i += itemsPerColumn) {
      columns.push(data.slice(i, i + itemsPerColumn));
    }
    return columns;
  };

  const columns1 = groupDataIntoColumns(DATA, 3);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 90 }}
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
        <ScrollView horizontal>
          {columns.map((column, columnIndex) => (
            <View key={columnIndex} style={style.column}>
              {column.map((item, index) => (
                <RenderItem key={index} name={item.name} icon={item.icon} />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>Done</Text>
        </TouchableOpacity>
        <View style={style.card}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 130,
              backgroundColor: "#073042",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={{
                uri: "https://pngimg.com/uploads/circle/circle_PNG77.png",
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: 5,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: "pink",
                }}
              ></View>
              <Text>Author</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  width: "80%",
                }}
              >
                New Compose for Wear OS codelab
              </Text>
              <View
                style={{
                  width: "20%",
                  alignItems: "flex-end",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    width: 40,
                    backgroundColor: "#FFB5DA",
                    borderRadius: 20,
                  }}
                >
                  <Icon name="bookmark" size={20} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "purple",
                }}
              ></View>
              <Text>January 1, 2021</Text>
              <Text>developer.android.com</Text>
            </View>
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 15,
                  lineHeight: 20,
                }}
              >
                In this codelab, you can learn how Wear OS can work with
                Compose, what Wear OS specific composables are available, and
                more!
              </Text>
            </View>
          </View>
          <View>
            <ScrollView horizontal>
              {topics.map((v, i) => {
                return (
                  <View key={i}>
                    <RenderTopic name={v.name} isCheck={v.isCheck} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  card: {
    overflow: "hidden",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 30,
    height: 400,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Border radius for rounded corners
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  column: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    width: "auto",
    minWidth: 250,
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

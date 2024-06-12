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
import TopicComponent from "../components/TopicComponent";
import { useState, useCallback, useEffect } from "react";
import { loadTopics, saveTopics } from "../storages/store";

interface User {
  name: string;
}

interface Item {
  name: string;
  icon: string;
}

const ITEMS_PER_COLUMN = 3;

const Home = () => {
  const [topics, setTopics] = useState([]);
  const columns = [];
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("is Refresh");
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      // console.log("Fetching topics");
      const loadedTopics = await loadTopics();
      if (loadedTopics.length === 0) {
        console.log("No topics found, saving initial topics");
      } else {
        setTopics(loadedTopics);
        console.log(loadedTopics);
      }
    };
    fetchTopics();
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
        <TopicComponent topics={topics} />
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

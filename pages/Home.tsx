import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useState, useCallback } from "react";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("is Refresh");
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
  }, []);

  const user = [
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

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#ffd6f0",
      }}
    >
      <View style={{ flex: 0.5 }}>
        <Text style={style.textHeader}>What are you interested in?</Text>
        <Text style={style.textDes}>
          Updates from interests you follow will appear here. Follow some things
          to get started.
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
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
});

export default Home;

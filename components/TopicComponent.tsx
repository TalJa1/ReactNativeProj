import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

interface Topic {
  name: string;
  isCheck: boolean;
}

interface TopicProps {
  topics: Topic[];
}

const TopicComponent: React.FC<TopicProps> = ({ topics }) => {
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
  return (
    <View style={styles.card}>
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
            In this codelab, you can learn how Wear OS can work with Compose,
            what Wear OS specific composables are available, and more!
          </Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal>
          {topics.map((v: any, i: number) => {
            return (
              <View key={i}>
                <RenderTopic name={v.name} isCheck={v.isCheck} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 30,
    height: 400,
    backgroundColor: "white",
  },
});

export default TopicComponent;

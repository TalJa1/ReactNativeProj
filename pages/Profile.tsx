import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

interface AndroidCard {
  title: string;
  description: string;
}

const Profile = () => {
  const cardData: AndroidCard[] = [
    {
      title: "Title",
      description: "developer.android.com",
    },
    {
      title: "Title1",
      description: "developer.android.com",
    },
    {
      title: "Title2",
      description: "developer.android.com",
    },
  ];

  const RenderCard: React.FC<AndroidCard> = ({ title, description }) => {
    return (
      <View
        style={{
          columnGap: 10,
          overflow: "hidden",
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          borderRadius: 20,
          backgroundColor: "white",
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            columnGap: 5,
          }}
        >
          <Text>developers</Text>
          <Icon name="android" color="green" />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#ffd6f0",
        paddingHorizontal: 15,
      }}
    >
      <View style={styles.profileImg}>
        <View style={styles.userImg}>
          <Icon name="user" size={100} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "400",
        }}
      >
        Lucy
      </Text>
      <Text
        style={{
          marginVertical: 20,
          lineHeight: 20,
        }}
      >
        Android Developer Advocate @google, sketch comedienne, opera singer.
        BLM.
      </Text>
      <ScrollView horizontal>
        {cardData.map((v, i) => {
          return (
            <View
              key={i}
              style={{
                marginRight: 10,
              }}
            >
              <RenderCard title={v.title} description={v.description} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    height: 240,
    borderRadius: 170,
    backgroundColor: "#D3BBB2",
  },
});

export default Profile;

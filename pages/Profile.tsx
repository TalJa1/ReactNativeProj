import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import SelectDropdown from "react-native-select-dropdown";

interface AndroidCard {
  title: string;
  description: string;
}

interface SelectDrop {
  title: string;
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

  const selectDrop: SelectDrop[] = [
    {
      title: "Newest List",
    },
    {
      title: "Oldest List",
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

  const RenderDropdown: React.FC = () => {
    return (
      <SelectDropdown
        data={selectDrop}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || selectDrop[0].title}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
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
      <View
        style={{
          marginTop: 20,
        }}
      >
        <RenderDropdown />
      </View>
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
  dropdownButtonStyle: {
    width: 200,
    height: 60,
    borderRadius: 40,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default Profile;

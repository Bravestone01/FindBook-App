import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SliderList from "../lists/SliderList";
import { sliderData } from "../source/Data";

const HomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome name="plus" size={26} color="black" />
          </TouchableOpacity>

          <View style={styles.innerHeader}>
            <TouchableOpacity>
              <FontAwesome name="toggle-off" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.imgView}>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 40, height: 40, borderRadius: 20 }}
                resizeMode="center"
              />
            </View>
          </View>
        </View>
        
        <View style={styles.afterHeader}>
          <Text
            numberOfLines={2}
            style={{ fontSize: 16, fontWeight: "500", color: "#9D9D9D" }}
          >
            Welcome back, Bunny!
          </Text>
          <Text
            numberOfLines={3}
            style={{ fontSize: 26, fontWeight: "500", color: "#19191B" }}
          >
            What do you want to read today?
          </Text>
        </View>
        
        <View style={styles.searchView}>
          <EvilIcons name="search" size={28} color="gray" />
          <TextInput placeholder="SEARCH" style={styles.inputSearch} />
        </View>
        
        <View style={styles.txtView}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#19191B" }}>
            Find Your Favorite Book
          </Text>
        </View>

       
        <View style={{ flex: 1, width: "90%", paddingTop: 20 }}>
          <FlatList
            data={sliderData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SliderList item={item} />}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{gap:10, paddingBottom:10,}}

          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  imgView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerHeader: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  afterHeader: {
    paddingTop: 20,
    width: "90%",
    gap: 10,
    paddingBottom: 20,
  },
  searchView: {
    width: "90%",
    height: 49,
    backgroundColor: "#C4C4C426",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    borderRadius: 5,
  },
  inputSearch: {
    width: "90%",
    height: 48,
    fontSize: 20,
  },
  txtView: {
    width: "90%",
    justifyContent: "flex-end",
    paddingTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 0.4,
    borderColor: "gray",
  },
});

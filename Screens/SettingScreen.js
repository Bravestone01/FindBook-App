import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  Button
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Options from "../components/Options";
import { useTheme } from "../ThemeContext";
import { LinearGradient } from "expo-linear-gradient";


const SettingScreen = ({navigation}) => {
  const { isDarkMode } = useTheme();

  const backgroundStyle ={
    backgroundColor: isDarkMode? "black":"#fff"
  }

  const textStyle={
    color: isDarkMode? "#fff":null
  }


  
  return (
    <>
      <LinearGradient
        colors={isDarkMode ? ["#09FBD380", "black", "purple","#09FBD380"] : ["#fff", "#fff"]}
        style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}
      >
        <View style={styles.headerview}>
          <TouchableOpacity onPress={()=>navigation?.goBack()} >
          <AntDesign name="arrowleft" size={34} color={isDarkMode ? "#fff" : "black"} />
          

          </TouchableOpacity>
         
        </View>
        <View style={styles.imageView}>
          <View style={styles.image}>
            <Image
              source={require("../assets/Images/myphoto.jpg")}
              style={styles.imageFile}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.cameraIcon}>
              <MaterialCommunityIcons
                name="camera-plus"
                size={24}
                color="purple"
              />
            </TouchableOpacity>
          </View>

          <Text style={[{ fontSize: 20, fontWeight: "bold",  }, textStyle]}>Syed Mujtaba</Text>
          <Text style={[{ fontSize: 16, color: "gray", fontWeight: "400" }, textStyle]}>
            @Bravestone
          </Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={[{ fontSize: 18, fontWeight: "600", color: "gray" },textStyle]}>
              Eidt Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bodyView}>
          <Options name={"book"} text={"My Books"}  onPress={()=>navigation?.navigate("MyBooks")} />
          <Options name={"lock"} text={"Change Password"}  onPress={()=>navigation?.navigate("MyBooks")} />
          <Options name={"gift"} text={"Invite Friend"}  onPress={()=>navigation?.navigate("MyBooks")} />
          <Options name={"right-from-bracket"}  onPress={()=>navigation?.navigate("MyBooks")} text={"Logout"} />

        </View>
      </LinearGradient>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "#fff",
  },
  headerview: {
    height: 60,
    width: "90%",
    // backgroundColor:"red",
    justifyContent: "flex-end",
  },
  imageView: {
    width: "90%",
    // backgroundColor:"red",
    paddingVertical: 10,
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: "30%",
    height: 100,
    // backgroundColor:"pink",  // backgroundColor:"pink",
    borderRadius: 50,
  },
  imageFile: {
    width: "100%",
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 10,
    right: -16,
    backgroundColor: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 6,
    alignItems: "center",
  },
  editBtn: {
    justifyContent: "center",
    width: "50%",
    height: 42,
    alignItems: "center",
    borderWidth: 0.7,
    borderRadius: 20,
    borderColor: "skyblue",
  },
  bodyView: {
    width: "100%",
    // backgroundColor:"red",
    alignItems: "center",
    paddingTop: 30,
    gap: 25,
  },
  

});

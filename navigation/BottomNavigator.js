import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/BookmarkScreen";
import SettingScreen from "../Screens/SettingScreen";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from "../ThemeContext";
import BookmarkScreen from "../Screens/BookmarkScreen";


const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  const { isDarkMode } = useTheme();


  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#D45555",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius:80,
          borderTopRightRadius:80,
          position:"absolute",
          backgroundColor:isDarkMode? "black":"#fff"
          
          
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Bottom.Screen
        name="BookmarkScreen"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "bookmark" : "bookmark-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Bottom.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "user" : "user";
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});

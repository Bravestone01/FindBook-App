import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from '../Screens/HomeScreen';
import BokkmarkScreen from '../Screens/BokkmarkScreen';
import SettingScreen from '../Screens/SettingScreen';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D45555',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false,
        tabBarHideOnKeyboard: true, 
        tabBarStyle:{
          height:80,
          borderTopLeftRadius:80,
          borderTopRightRadius:80,
          
        }
      }}
    >
      <Bottom.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'home' : 'home-outline'; 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Bottom.Screen
        name='BokkmarkScreen'
        component={BokkmarkScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'bookmark' : 'bookmark-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Bottom.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'settings' : 'settings-outline'; 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
   
    </Bottom.Navigator>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({});

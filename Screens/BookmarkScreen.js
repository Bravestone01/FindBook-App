import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';


const BookmarkScreen = () => {

  const { isDarkMode } = useTheme();

  const textStyle={
    backgroundColor: isDarkMode? "black":"#fff"
  }
  return (
   
    <LinearGradient
    colors={isDarkMode ? ["#09FBD380", "black", "purple","#09FBD380"] : ["#fff", "#fff"]}
    style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}
  >
    </LinearGradient>
  )
}

export default BookmarkScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    width:"100%"

  }

})
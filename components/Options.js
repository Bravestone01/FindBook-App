import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from "../ThemeContext";

const Options = ({text , name , navigation, onPress }) => {

  const { isDarkMode } = useTheme();

  const textStyle={
    color: isDarkMode? "#fff":null
  }

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress} >
        <View style={styles.iconAndTextView}>

        <FontAwesome6 name={name} size={24}color={isDarkMode ? "#fff" : "black"} />
        <Text style={[{fontSize:16, fontWeight:"500"},textStyle]}>{text}</Text>
        </View>
        <View>
        <FontAwesome name="angle-right" size={24} color={isDarkMode ? "#fff" : "black"} />
        </View>


      
    </TouchableOpacity>
  )
}

export default Options

const styles = StyleSheet.create({
    mainContainer:{
        width:"90%",
        flexDirection:"row",
        paddingVertical:10,
        backgroundColor:"#0000",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15,
    },
    iconAndTextView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:20,
    }
})
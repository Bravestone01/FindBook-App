import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from '../ThemeContext';

const SearchBar = ({value, onChangeText}) => {
  const { isDarkMode } = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff':null
  }

  return (
    <View style={[styles.container,backgroundStyle]}>
         <View style={styles.innerView}>
         <AntDesign name="search1" size={22} color="gray" />
         <TextInput placeholder='Search' style={styles.inputStyle}  value={value} onChangeText={onChangeText} />
            
         </View>

         <TouchableOpacity>

        <MaterialIcons name="keyboard-voice" size={24} color="gray" />

        </TouchableOpacity>


     
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:49,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
        borderRadius:10,
        paddingRight:18,
        borderWidth:0.6,
        borderColor:"gray"
    },
    innerView:{
        flexDirection:"row",
        alignItems:"center",
        gap:9,
    },
    inputStyle:{
        fontSize:16,
        height:49,
        width:"85%",


    }
})
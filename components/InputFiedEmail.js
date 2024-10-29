import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const InputFiedEmail = ({placeholder , onChangeText,value}) => {
  return (
    <View style={styles.main}>
        <MaterialIcons name="email" size={24} color="gray" />
        <TextInput placeholder={placeholder} style={styles.input} keyboardType="email" onChangeText={onChangeText}
        value={value} />
     
    </View>
  )
}

export default InputFiedEmail

const styles = StyleSheet.create({
    main:{
        width:"90%",
        height:40,
        // backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        justifyContent:"center",
        paddingHorizontal:2,
        borderWidth:0.7,
        borderRadius:10,
        borderColor:"gray",
    },

    input:{
        // backgroundColor:"yellow",
        width:"90%",
        

    }
})
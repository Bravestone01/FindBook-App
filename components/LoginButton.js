import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginButton = ({text , onPress}) => {
  return (
   <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>{text}</Text>
   </TouchableOpacity>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    btn:{
        width:"90%",
        backgroundColor:"#493B3B",
        alignItems:"center",
        paddingVertical:8,
        borderRadius:13,
        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    }
})
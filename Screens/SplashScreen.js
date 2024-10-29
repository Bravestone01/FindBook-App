import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const timer =  setTimeout (()=>{
            navigation?.replace("BottomNavigator")
        },2000)

        return ()=> clearTimeout(timer)
    },[navigation])

  return (
    <>
    <StatusBar backgroundColor="#004e92" barStyle="dark-content"/>
    <View style={styles.container}>


      <Text style={styles.text}>FINDBOOK.COM</Text>


    </View>


    
    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#004e92",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:30,
        color:"#fff",
        fontWeight:"500",
    }

})
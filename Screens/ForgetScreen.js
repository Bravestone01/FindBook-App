import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import InputFiedEmail from '../components/InputFiedEmail';
import LoginButton from '../components/LoginButton';


const ForgetScreen = ({navigation, onPress , placeholder}) => {

    

  return (
    <>
    <LinearGradient  colors={['#B9DCF8', '#FFF', '#FFF']} style={styles.container}>
        <LinearGradient colors={['#B9DCF8', '#FFF', '#FFF']} style={styles.innerContainer}>
            <View style={styles.forgetView}>
                <Text style={{fontSize:20, fontWeight:"bold",}}>
                    Forget Password
                </Text>

                <Text style={{fontSize:14, color:"gray", fontWeight:"500"}}>
                   Don’t worry! It occurs. Please enter the email address linked with your account.
                </Text>
            </View>
            <View style={styles.inputView}>
                <InputFiedEmail placeholder={"Enter Your Email"}/>
                <LoginButton  text={"Send Code"} onPress={()=>navigation?.navigate("OTPScreen")}/>

            </View>

        </LinearGradient>

    </LinearGradient>
    </>

   
  )
}

export default ForgetScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    innerContainer:{
        width: "90%",
        // backgroundColor: "#E2F1E7",
        height: 250,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    forgetView:{
        width:"100%",
        paddingTop:20,
        paddingLeft:15,
        gap:6,
    },
    inputView:{
        alignItems:"center",
        width:"100%",
        paddingTop:30,
        gap:20,
    }
})
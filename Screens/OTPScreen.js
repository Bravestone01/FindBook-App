import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import LoginButton from '../components/LoginButton';

const OTPScreen = ({navigation, onPress}) => {

  return (
    <>
    <LinearGradient  colors={['#B9DCF8', '#FFF', '#FFF']} style={styles.container}>
        <LinearGradient colors={['#B9DCF8', '#FFF', '#FFF']} style={styles.innerContainer}>
            <View style={styles.forgetView}>
                <Text style={{fontSize:20, fontWeight:"bold",}}>
                    OTP Verification
                </Text>
                <Text style={{fontSize:14, color:"gray", fontWeight:"500"}}>Enter the verification code we just sent on your email address </Text>
            </View>

            <View style={styles.boxesView}>
                <TextInput style={styles.box} keyboardType="numeric" maxLength={1}/>
                <TextInput style={styles.box}  keyboardType="numeric" maxLength={1}/>
                <TextInput style={styles.box}  keyboardType="numeric" maxLength={1}/>
                <TextInput style={styles.box}  keyboardType="numeric" maxLength={1}/>
                

            </View>

            <View style={styles.resendBtnView}>
                <Text style={{color:"gray"}}>Didn't receive the code?</Text> 
                <TouchableOpacity><Text style={{color:"blue" , fontWeight:"700"}}>Resend</Text></TouchableOpacity>
            </View>
            <View style={styles.btnView}>

            <LoginButton text={"Verify"} onPress={()=>navigation?.navigate("SetPasswordScreen")}/>
            </View>

        </LinearGradient>

    </LinearGradient>
    </>

   
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    innerContainer:{
        width: "90%",
        backgroundColor: "#E2F1E7",
        height: 300,
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
        paddingTop:30,
        paddingLeft:15,
        gap:6,
    },
    boxesView:{
        paddingTop:20,
        width:"100%",
        flexDirection:"row",
        gap:10,
        paddingHorizontal:15,
       justifyContent:"center"
    },
    box:{
        height:50,
        width:"20%",
        borderBottomWidth:1,
        fontSize:25,
        textAlign:"center",
        color:"blue",
        borderColor:"red",
       
    },
    btnView:{
        width:"100%",
        alignItems:"center",
        paddingTop:20,

    }, 
    resendBtnView:{
        width:"100%",
        flexDirection:"row",
        gap:5,
        paddingLeft:30,
        paddingTop:10,
    }
   
})
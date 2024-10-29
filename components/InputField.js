import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const InputField = ({placeholder , onChangeText , value}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev); 
  };

  return (
    <View style={styles.main}>

        <MaterialIcons name="lock" size={24} color="gray" />
      <TextInput style={styles.input} placeholder={placeholder} 
      value={value}
       secureTextEntry={!isPasswordVisible} onChangeText={onChangeText} />
      <TouchableOpacity onPress={togglePasswordVisibility}>
      <Entypo name={isPasswordVisible ? "eye" : "eye-with-line"} size={24} color="gray" />
      </TouchableOpacity>

     
    </View>
  )
}

export default InputField

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
        paddingRight:5,
        borderWidth:0.7,
        borderRadius:10,
        borderColor:"gray"
    },
    input:{
        // backgroundColor:"yellow",
        width:"80%"

    }
})
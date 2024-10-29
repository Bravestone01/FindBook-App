import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SliderList = ({item}) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity>

      <Image source={item.image} style={styles.image} />

      </TouchableOpacity>
      <View style={styles.txtView}>

        <View style={styles.titleAndEditView}>
        <Text numberOfLines={2}style={{fontSize:18, fontWeight:"bold"}} >{item.title}</Text>
        <TouchableOpacity>
        <Entypo name="edit" size={20} color="gray" />
        </TouchableOpacity>
        </View>
        <Text numberOfLines={2} style={{fontSize:16, fontWeight:"700" ,color:"#9D9D9D"}}>{item.subtitle}</Text>
        <Text style={{fontSize:18, fontWeight:"600"  , color:"green"}}>{item.price}</Text>

        <View style={{width:"80%" ,  flexDirection:"row", justifyContent:"space-between"}}>
        <TouchableOpacity>
        <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>
                Add to Cart
            </Text>
        </TouchableOpacity>
        </View>


      </View>
      
      
   
    </View>
  )
}

export default SliderList

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"red",
        width:"100%",
        flexDirection:"row",
        gap:10,
        padding:10,
        borderWidth:0.7,
        borderRadius:5,
     
    },
    image:{
        height:130,
        width:100,
    },
    titleAndEditView:{
        flexDirection:"row",
        width:"80%",
        justifyContent:"space-between",
        alignItems:"center",

    },
    txtView:{
        gap:10,
    }
    
})
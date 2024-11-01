import { View, Text, StyleSheet , FlatList, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '../ThemeContext';
import { bookslist } from '../source/Data';

const MyBooks = () => {
    const { isDarkMode } = useTheme();

    const backgroundStyle ={
        backgroundColor: isDarkMode? "black":"#fff"
      }

  return (

    <>
    <LinearGradient  colors={isDarkMode ? ["#09FBD380", "black", "purple", "#09FBD380"] : ["#fff", "#fff"]}
    style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}>

        <FlatList
        data={bookslist}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <View style={styles.innerContainer}>
                <View style={styles.innerView}>
                <View style={styles.imageView}>
                    <Image source={item.Image} resizeMode='cover' style={styles.image} />
                </View>
                </View>

            </View>
            
        )}

        contentContainerStyle={styles.flatlistStyle}

        
        />






    </LinearGradient>
    </>
  )
}

export default MyBooks

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:"100%",
    },
    image:{
        height:150,
        width:100,
        borderRadius:10,
    },
    imageView:{
        height:150,
        width:100,
    },
    flatlistStyle:{
        gap:10,  
    },
    innerContainer:{
        width:"100%",
        backgroundColor:"red",
        alignItems:"center"
    },
    innerView:{
        width:"94%",
        backgroundColor:"pink",
        paddingHorizontal:10,
        paddingVertical:10,
    }
    




})
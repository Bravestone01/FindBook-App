import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { bookslist } from "../source/Data";
import { useTheme } from "../ThemeContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const BookList = ({books, onPress, }) => {
  const { isDarkMode } = useTheme();

  const textStyle = {
    color: isDarkMode ? '#fff':null
  }
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={()=> onPress(item)}>
            <Image
              source={item.Image}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.textView}>
            <Text style={[styles.title, textStyle]} numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text style={[styles.author, textStyle]} numberOfLines={1} ellipsizeMode="tail">
              {item.aurther}
            </Text>
          </View>

         
        </View>
      )}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 0,gap:20 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BookList;

const styles = StyleSheet.create({
  itemContainer: {
    gap:8,
    width:150,
    alignItems:"center",
  },
  image: {
    height: 250,
    width: 150,
    borderRadius: 20,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  author: {
    fontSize: 14,
    color: "#666",
  },
//  
});

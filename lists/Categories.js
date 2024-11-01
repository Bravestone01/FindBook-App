import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BooksName, categories } from "../source/Data"
import { useTheme } from "../ThemeContext";

const Categories = ({selectedCategory, onSelectCategory}) => {

  const { isDarkMode } = useTheme();

  const textStyle = {
    color: isDarkMode ? '#fff':null
  }
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> onSelectCategory(item.id)}
         style={[styles.categoryItem, selectedCategory=== item.id && styles.selectedCategory]}
         accessibilityLabel={`Select category: ${item.title}`}
         >
          <Text style={[styles.text,selectedCategory=== item.id, textStyle]}>{item.title}</Text>
        </TouchableOpacity>
      )}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryItem:{
    height:30,
    justifyContent:'center'
  },
  selectedCategory:{
    borderBottomWidth:2,
    borderColor: 'tomato',
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight:"500"
  },
  container: {
    gap: 15,
    paddingHorizontal: 10,
  },
});

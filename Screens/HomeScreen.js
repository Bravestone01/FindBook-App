import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SearchBar from "../components/SearchBar";
import Categories from "../lists/Categories";
import BookList from "../lists/BookList";
import AllBooks from "../lists/AllBooks";
import { bookslist, categories } from "../source/Data";
import { useTheme } from "../ThemeContext";

const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const { isDarkMode, toggleTheme } = useTheme();

  const toggleImage = () => {
    setColor(!color);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredBooks = bookslist.filter(
    (book) =>
      book.catagory === categories.find((c) => c.id === selectedCategory).title
  );

  const handleBookClick = (item) => {
    navigation.navigate("BookDetailsScreen", { item });
  };

  return (
    <ScrollView>
      <StatusBar
        backgroundColor={isDarkMode ? "#333" : "#fff"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <LinearGradient
        colors={isDarkMode ? ["#09FBD380", "black", "purple", "#09FBD380"] : ["#fff", "#fff"]}
        style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Octicons name="three-bars" size={30} color={isDarkMode ? "#fff" : "black"} />
          </TouchableOpacity>

          <View style={styles.headerInnerView}>
            <TouchableOpacity onPress={() => { toggleTheme(); toggleImage(); }}>
              <Image
                source={color ? require("../assets/Images/one.png") : require("../assets/Images/two.png")}
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation?.navigate("SettingScreen")}>

            <FontAwesome6 name="circle-user" size={40} color={isDarkMode ? "#fff" : "black"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting Section */}
        <View style={styles.greetingView}>
          <View style={styles.greetingInnerView}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: isDarkMode ? "#aaa" : "#9D9D9D" }}>
              Welcome back, Mujtaba!
            </Text>
            <Text style={{ fontSize: 26, fontWeight: "500", color: isDarkMode ? "#eee" : "#19191B" }}>
              What do you want to read today?
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarView}>
          <SearchBar />
        </View>

        {/* Categories Section */}
        <View style={{ width: "90%", paddingTop: 30, paddingBottom: 25 }}>
          <Categories selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
        </View>

        {/* Book List */}
        <View style={styles.BooksView}>
          <BookList books={filteredBooks} onPress={handleBookClick} />
        </View>

        {/* New Arrivals */}
        <View style={styles.newArrivallsView}>
          <Text style={{ fontSize: 26, fontWeight: "600", color: isDarkMode ? "#eee" : "#000" }}>
            All Books
          </Text>
        </View>

        <View style={styles.BooksViewTwo}>
          <AllBooks onPress={handleBookClick} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingBottom: 99,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  headerInnerView: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  greetingView: {
    width: "90%",
    paddingHorizontal: 9,
    paddingTop: 25,
  },
  greetingInnerView: {
    width: "75%",
    gap: 10,
    paddingBottom: 25,
  },
  searchBarView: {
    width: "86%",
    paddingBottom: 10,
  },
  BooksView: {
    width: "90%",
  },
  newArrivallsView: {
    width: "86%",
    paddingTop: 20,
  },
  BooksViewTwo: {
    width: "90%",
    paddingTop: 20,
  },
});

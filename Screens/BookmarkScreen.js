import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useTheme } from "../ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import { useBookmarks } from "../BookmarkContext";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const BookmarkScreen = () => {
  const { bookmarks, removeBookmark } = useBookmarks();

  const { isDarkMode } = useTheme();

  const handleRemoveBookmark = (bookId) => {
    removeBookmark(bookId);
  };

  const textStyle = {
    backgroundColor: isDarkMode ? "black" : "#fff",
  };
  return (
    <LinearGradient
      colors={
        isDarkMode
          ? ["#09FBD380", "black", "purple", "#09FBD380"]
          : ["#fff", "#fff"]
      }
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: isDarkMode ? "#34495e" : "#0e6655" },
        ]}
      >
        <Text style={styles.headerText}>Your Bookmarks</Text>
      </View>

      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.innerContainer}>
            <View
              style={[
                styles.innerView,
                { borderColor: isDarkMode ? "#fff" : null },
              ]}
            >
              <View style={styles.imageView}>
                <TouchableOpacity>
                  <Image
                    source={item.Image}
                    resizeMode="cover"
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bookDetailsView}>
                <Text
                  numberOfLines={2}
                  style={[
                    { fontSize: 20, fontWeight: "bold" },
                    { color: isDarkMode ? "#fff" : "black" },
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  numberOfLines={2}
                  style={[
                    { fontSize: 18, fontWeight: "700" },
                    { color: isDarkMode ? "#fff" : "black" },
                  ]}
                >
                  {item.aurther}
                </Text>
                <Text
                  numberOfLines={2}
                  style={[
                    { fontSize: 16, fontWeight: "600" },
                    { color: isDarkMode ? "#fff" : "black" },
                  ]}
                >{`Category: ${item.catagory}`}</Text>

                <TouchableOpacity onPress={() => handleRemoveBookmark(item.id)}>
                <MaterialIcons name="delete-forever" size={24} color="tomato" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.flatlistStyle}
      />
    </LinearGradient>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    width: "100%",
    backgroundColor: "#0e6655",
    height: 80,
    justifyContent: "center",
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },

  flatlistStyle: {
    gap: 10,
    paddingBottom: 70,
  },
  innerView: {
    width: "94%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    borderWidth: 0.6,
  },
  imageView: {
    height: 150,
    width: 100,
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  bookDetailsView: {
    width: "68%",
    justifyContent: "center",
    gap: 10,
  },
});

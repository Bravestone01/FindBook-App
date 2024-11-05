import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import { useBookmarks } from '../BookmarkContext';
import Toast from "react-native-toast-message";

const BookDetailsScreen = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const { addBookmark } = useBookmarks();
  const { item } = route.params;
;
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={{ color: isDarkMode ? "#fff" : "black", fontSize: 18 }}>
          Book data is not available.
        </Text>
      </View>
    );
  };

  const handleBookmark = () => {
    addBookmark(item); 
    
    Toast.show({
      type: "success",
      text1: "Bookmarked!",
      text2: "This book has been added to your bookmarks.",
    });
  };

  return (
    <>
      <StatusBar
        backgroundColor={isDarkMode ? "#333" : "#fff"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color={isDarkMode ? "#fff" : "black"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBookmark}>
            <FontAwesome name="bookmark" size={30} color="tomato" />
          </TouchableOpacity>
        </View>

        <View style={styles.imageView}>
          <Image
            source={ item.Image } 
            resizeMode="cover"
            style={styles.image}
          />

          <View style={styles.textView}>
            <Text style={[{ fontSize: 18, fontWeight: "500" }, { color: isDarkMode ? "#fff" : "black" }]}>
              {item.title}
            </Text>
            <Text style={[{ fontSize: 16, fontWeight: "400" }, { color: isDarkMode ? "#fff" : "gray" }]}>
              by {item.aurther}
            </Text>

            <View style={styles.starView}>
              <Foundation name="star" size={24} color="yellow" />
              <Foundation name="star" size={24} color="yellow" />
              <Foundation name="star" size={24} color="yellow" />
              <Foundation name="star" size={24} color="yellow" />
              <Text style={[{ fontSize: 16, fontWeight: "500" }, { color: isDarkMode ? "#fff" : "black" }]}>
                4.0
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.textMainView}>
          <View style={{ gap: 5 }}>
            <Text style={[{ fontSize: 18, fontWeight: "600" }, { color: isDarkMode ? "#fff" : "black" }]}>
              About the author
            </Text>
            <Text style={[{ fontSize: 14, fontWeight: "400" }, { color: isDarkMode ? "#fff" : "#9D9D9D" }]}>
              J.D. Salinger was an American writer, best known for his 1951
              novel The Catcher in the Rye. Before its publication, Salinger
              published several short stories in Story magazine.
            </Text>
          </View>

          <View style={{ gap: 5 }}>
            <Text style={[{ fontSize: 18, fontWeight: "600" }, { color: isDarkMode ? "#fff" : "black" }]}>Overview</Text>
            <Text style={[{ fontSize: 14, fontWeight: "400" }, { color: isDarkMode ? "#fff" : "#9D9D9D" }]}>
              The Catcher in the Rye is a novel by J. D. Salinger, partially
              published in serial form in 1945–1946 and as a novel in 1951. It
              was originally intended for adults but is often read by
              adolescents for its theme of angst, alienation and as a
              critique...
            </Text>
          </View>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
              Download Pdf
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    alignItems: "flex-end",
    paddingHorizontal: 8,
  },
  imageView: {
    height: 431,
    width: "55%",
    gap: 30,
  },
  image: {
    height: 320,
    width: "100%",
    borderRadius: 20,
  },
  textView: {
    width: "100%",
    alignItems: "center",
    gap: 4,
  },
  starView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    gap: 4,
  },
  textMainView: {
    width: "85%",
    gap: 10,
    paddingTop: 20,
  },
  btnView: {
    width: "85%",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingTop: 15,
  },
  btn: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#D45555",
    height: 55,
    justifyContent: "center",
    borderRadius: 10,
  },
});

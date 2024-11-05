import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { useTheme } from "../ThemeContext";
  import { bookslist } from "../source/Data";
  import Entypo from "@expo/vector-icons/Entypo";
  import { Picker } from "@react-native-picker/picker";
  import * as ImagePicker from "expo-image-picker";
  import Toast from "react-native-toast-message";
  import EvilIcons from '@expo/vector-icons/EvilIcons';
  
  const MyBooks = () => {
    const { isDarkMode } = useTheme();
    const [text, setText] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [bookName, setBookName] = useState("");
    const [aurtherName, setAurtherName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? "black" : "#fff",
    };

    const filteredBook = bookslist.filter((book)=>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()))
  
    const resetField = () => {
      setBookName("");
      setAurtherName("");
      setText("");
      setTextTwo("");
      setSelectedCategory("");
      setSelectedImage(null);
    };
  
    const handelModal = () => {
      setModalVisible(false);
      resetField();
    };
  
    const pickImage = async () => {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    };
  
    const handleSubmit = () => {
      if (!bookName || !aurtherName || !selectedCategory || !text || !textTwo || !selectedImage) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Please fill in all fields",
          visibilityTime: 2000,
        });
        return;
      }
      resetField();
      setModalVisible(false);

      Toast.show({
        type:"success",
        text1:"Book Add Succesfull",
        visibilityTime:2000,

      })
    };
  
    return (
      <>
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
                <Toast/>
              <View style={styles.modalInnerContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.headerText}>Add A New Book</Text>
                  <TouchableOpacity onPress={handelModal}>
                    <Entypo name="cross" size={34} color="black" />
                  </TouchableOpacity>
                </View>
  
                <View style={styles.inputFileds}>
                  <TextInput
                    placeholder="Enter Name"
                    style={styles.inputNames}
                    value={bookName}
                    onChangeText={(text) => setBookName(text.toString())}
                  />
                </View>
                <View style={styles.inputFileds}>
                  <TextInput
                    placeholder="Enter Author Name"
                    style={styles.inputNames}
                    value={aurtherName}
                    onChangeText={(text) => setAurtherName(text.toString())}
                  />
                </View>
                <View style={styles.inputFiledCategory}>
                  <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                  >
                    <Picker.Item label="Select Category" value="" />
                    <Picker.Item label="Fiction" value="Fiction" />
                    <Picker.Item label="Non-Fiction" value="Non-Fiction" />
                    <Picker.Item label="Science Fiction" value="Science Fiction" />
                    <Picker.Item label="Biography" value="Biography" />
                    <Picker.Item label="Self Help" value="Self Help" />
                  </Picker>
                </View>
                <View style={styles.inputFiledsOther}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Author Details (max 100 Chars)"
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                    multiline={true}
                    maxLength={100}
                    textAlignVertical="top"
                  />
                </View>
                <View style={styles.inputFiledsOther}>
                  <TextInput
                    style={styles.textBoxTwo}
                    placeholder="Book Details (max 300 Chars)"
                    value={textTwo}
                    onChangeText={(newText) => setTextTwo(newText)}
                    multiline={true}
                    maxLength={300}
                    textAlignVertical="top"
                  />
                </View>
                <View style={styles.inputimage}>
                  <TouchableOpacity onPress={pickImage} style={styles.btnImage}>
                    <Text style={styles.imagePickerText}>
                      {selectedImage ? "Change Image" : "Select Image"}
                    </Text>
                  </TouchableOpacity>
                </View>
                {selectedImage && (
                  <Image
                    source={{ uri: selectedImage }}
                    style={styles.selectedImage}
                  />
                )}
  
                <View style={styles.submitBtnView}>

                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text  style={styles.btnText}>
                            Add Book
                        </Text>
                    </TouchableOpacity>
               
                </View>
              </View>
            </View>
          </Modal>
  
          <View
            style={[
              styles.headerView,
              { backgroundColor: isDarkMode ? "#34495e" : "#0e6655" },
            ]}
          >
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Entypo name="circle-with-plus" size={34} color="#fff" />
            </TouchableOpacity>
            <Text style={{ fontSize: 26, color: "#fff", fontWeight: "bold" }}>
              FindBook.com
            </Text>
          </View>

          <View style={styles.searchMainView}>
            <View style={styles.searchView}>
            <EvilIcons name="search" size={30} color="gray" />
                <TextInput placeholder="Search" style={styles.searchBar} value={searchQuery}
                onChangeText={(text)=>setSearchQuery(text)} />
            </View>
          </View>
  
          <View style={styles.textAfterHeader}>
            <Text
              style={[
                { fontSize: 20, fontWeight: "600" },
                { color: isDarkMode ? "#fff" : "black" },
              ]}
            >
              Check All Books Here{" "}
            </Text>
          </View>
  
          <FlatList
            data={filteredBook}
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
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
          />
        </LinearGradient>
      </>
    );
  };
  
  export default MyBooks;
  
  // Add styles here as they were in your initial code
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerView: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
    paddingLeft: 20,
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
  },
  textAfterHeader: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  imageView: {
    height: 150,
    width: 100,
  },
  flatlistStyle: {
    gap: 10,
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  innerView: {
    width: "94%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    borderWidth: 0.6,
  },
  bookDetailsView: {
    width: "68%",
    justifyContent: "center",
    gap: 10,
  },
  modalContainer: {
    width: "100%",
    flex: 1,
    backgroundColor:"rgba(0,0,0,0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalInnerContainer: {
    width: "90%",
    paddingVertical: 20,
    backgroundColor: "white",
    gap: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius:20,
    borderBottomEndRadius:20,
  },
  inputFileds: {
    paddingTop: 10,
    paddingBottom:10,
  },
  inputText: {
    fontSize: 16,
    fontWeight: "500",
    width: "39%",
  },
  textBox: {
    width: "100%",
    height: 70,
    borderColor: "#ccc",
    borderWidth: 0.75,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  textBoxTwo: {
    width: "100%",
    height: 90,
    borderColor: "#ccc",
    borderWidth: 0.75,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  inputFiledsOther: {
    width: "100%",
    // backgroundColor:"pink",
    gap: 5,
  },
  inputNames: {
    borderWidth: 0.75,
    borderColor:"#ccc",
    width: "100%",
    justifyContent: "center",
    fontSize: 14,
    paddingLeft: 7,
    height:45,
    borderRadius:10,
  },
  picker: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 0.75,
    borderRadius: 8,
    width:"100%",
    color:"gray",

  },
  inputFiledCategory: {
    flexDirection: "row",
    alignItems: "center",
    width:'100%',
    borderRadius:10,
    borderWidth:0.75,
    borderColor:"#ccc"
  },
  inputimage: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,
  },
  imagePickerText: {
    color: "gray",
  },
  btnImage: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  imageText: {
    fontSize: 16,
    fontWeight: "500",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingBottom:15,
    paddingHorizontal:10,
    paddingLeft:20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },

  submitBtnView:{
    width:"100%",
    alignItems:"center",

  },
  btn:{
    width:"90%",
    backgroundColor:"brown",
    height:50,
    justifyContent:"center",
    borderRadius:20,
  },
  btnText:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    color:"#fff"
  },
  searchMainView:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
  },
  searchView:{
    width:"90%",
    flexDirection:"row",
    gap:7,
    alignItems:"center",
    height:40,
    paddingHorizontal:5,
    borderWidth:0.7,
    borderColor:"gray",
    borderRadius:10,

  },
  searchBar:{
    height:40,
    width:"89%",
  }
});

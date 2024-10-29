import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import LoginButton from "../components/LoginButton";
import Toast from "react-native-toast-message";
import {auth} from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpasword, setCpassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const HandleSignup = () => {
    if (!fname || !lname || !email || !password || !cpasword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in all fields",
        visibilityTime: 2000,
      });
      return;
    }

    if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid email address (e.g., example@domain.com)",
        visibilityTime: 2000,
      });
      return;
    }

    if (password !== cpasword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match",
        visibilityTime: 2000,
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        Toast.show({
          type: "success",
          text1: "Registration Successful",
          visibilityTime: 2000,
        });
        setTimeout(() => {
          navigation.navigate("LoginScreen");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during registration:", errorCode, errorMessage);
        Toast.show({
          type: "error",
          text1: "Registration Failed",
          text2: errorMessage,
          visibilityTime: 2000,
        });
      });
  };

  return (
    <LinearGradient
      colors={["#B9DCF8", "#FFF", "#FFF"]}
      style={styles.container}
    >
      <LinearGradient
        colors={["#B8DEFA", "#FFF", "#FFF"]}
        style={styles.signupView}
      >
        <View style={styles.signupheader}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign Up</Text>
        </View>
        {/* signupheader view end here */}
        <View style={styles.namesView}>
          <View style={styles.nameFieldView}>
            <Text style={{ fontWeight: "500", color: "gray" }}>First Name</Text>
            <TextInput
              style={styles.inputField}
              value={fname}
              onChangeText={setFname}
            />
          </View>
          <View style={styles.nameFieldView}>
            <Text style={{ fontWeight: "500", color: "gray" }}>Last Name</Text>
            <TextInput
              style={styles.inputField}
              value={lname}
              onChangeText={setLname}
            />
          </View>
        </View>
        {/* namesView end here */}
        <View style={styles.otherFieldView}>
          <Text style={{ fontWeight: "500", color: "gray" }}>Email</Text>
          <TextInput
            style={styles.otherFieldInput}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={{ fontWeight: "500", color: "gray" }}>Password</Text>
          <View style={styles.passwordField}>
            <TextInput
              style={styles.passwordinput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Entypo
                name={isPasswordVisible ? "eye" : "eye-with-line"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "500", color: "gray" }}>
            Confirm Password
          </Text>
          <View style={styles.passwordField}>
            <TextInput
              style={styles.passwordinput}
              value={cpasword}
              onChangeText={setCpassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Entypo
                name={isPasswordVisible ? "eye" : "eye-with-line"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* otherFieldView end Here */}

        <View style={styles.resgistredBtnView}>
          <LoginButton text={"Register"} onPress={HandleSignup} />
        </View>
      </LinearGradient>
      {/* signupView end here */}
    </LinearGradient>
    // container view end
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#B9E5E8",
    justifyContent: "center",
    alignItems: "center",
  },
  signupView: {
    width: "90%",
    backgroundColor: "#E2F1E7",
    height: 550,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    alignItems: "center",
  },
  signupheader: {
    width: "100%",
    height: 100,
    // backgroundColor:"red",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  namesView: {
    paddingTop: 10,
    width: "100%",
    height: 80,
    // backgroundColor:"red",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  nameFieldView: {
    width: "43.5%",
    gap: 7,
  },
  inputField: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    height: 35,
    borderColor: "gray",
    borderRadius: 8,
  },
  otherFieldView: {
    width: "90%",
    // backgroundColor:"red",
    gap: 10,
    paddingTop: 10,
  },
  otherFieldInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    height: 37,
    paddingHorizontal: 5,
    borderColor: "gray",
  },
  passwordField: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    height: 37,
    borderColor: "gray",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 10,
  },
  passwordinput: {
    width: "85%",
    // backgroundColor:"yellow"
  },
  resgistredBtnView: {
    width: "100%",
    // backgroundColor:"red",
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
});

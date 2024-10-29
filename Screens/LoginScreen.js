import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import InputField from "../components/InputField";
import InputFiedEmail from "../components/InputFiedEmail";
import LoginButton from "../components/LoginButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login Successful", user);
        Toast.show({
          type: "success",
          text1: "Login Successful",
          visibilityTime: 2000,
        });
        setEmail("");
        setPassword("");

        
        navigation.navigate("HomeScreen"); 
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during login:", errorCode, errorMessage);
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: errorMessage,
        });
      });
  };
  return (
    <>
      <StatusBar backgroundColor="#B9DCF8" barStyle="dark-content" />
      <LinearGradient
        colors={["#B9DCF8", "#FFF", "#FFF"]}
        style={styles.container}
      >
        <LinearGradient
          colors={["#B8DEFA", "#FFF", "#FFF"]}
          style={styles.innerView}
        >
          <View style={styles.singupBtnView}>
            <View style={styles.vectorView}>
              <TouchableOpacity
                onPress={() => navigation?.navigate("SignupScreen")}
              >
                <FontAwesome5 name="sign-in-alt" size={39} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ color: "black", fontSize: 20, fontWeight: "700" }}>
                {" "}
                Sign In With Email
              </Text>
            </View>
          </View>
          {/* singupBtnView END HERE */}
          <View style={styles.mainInputView}>
            <View style={styles.inputField}>
              <InputFiedEmail
                placeholder={"Email"}
                value={email}
                onChangeText={setEmail}
              />
              <InputField
                placeholder={"Password"}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* inputField end Here */}

            <View style={styles.forgetView}>
              <TouchableOpacity
                onPress={() => navigation?.navigate("ForgetScreen")}
              >
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "600" }}
                >
                  Forget Password ?
                </Text>
              </TouchableOpacity>
            </View>
            {/* Forget VIEW END HERE */}

            <View style={styles.btnView}>
              <LoginButton text={"Get Started"} onPress={handleLogin} />
            </View>
            {/* btnView end here */}

            <View style={styles.afterbtnTextView}>
              <Text style={{ fontSize: 16, color: "gray", fontWeight: "700" }}>
                Or Sign in With{" "}
              </Text>
            </View>
            {/* afterbtnTextView end here */}
            <View style={styles.otherLoginOptionView}>
              <TouchableOpacity style={styles.iconStyle}>
                <AntDesign name="google" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconStyle}>
                <AntDesign name="facebook-square" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconStyle}>
                <AntDesign name="apple1" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {/* otherLoginOptionView end here */}
          </View>
          {/* mainInputView end here */}
        </LinearGradient>
        {/* innerView END HERE */}
      </LinearGradient>
      {/* container END HERE */}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#B9E5E8",
    justifyContent: "center",
    alignItems: "center",
  },
  innerView: {
    width: "90%",
    backgroundColor: "#E2F1E7",
    height: 455,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },

  singupBtnView: {
    // backgroundColor: "red",
    width: "100%",
    height: 130,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
  },

  vectorView: {
    width: "20%",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 60,
    justifyContent: "center",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  mainInputView: {
    flex: 1,
    // backgroundColor:"red",
  },
  inputField: {
    width: "100%",
    // backgroundColor:"pink",
    height: 125,
    alignItems: "center",
    gap: 13,
    justifyContent: "flex-end",
  },
  forgetView: {
    width: "100%",
    // backgroundColor:"blue",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 22,
    paddingTop: 5,
  },
  btnView: {
    width: "100%",
    alignItems: "center",
    paddingTop: 13,
  },
  afterbtnTextView: {
    width: "100%",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 10,
    // backgroundColor:"red"
  },
  otherLoginOptionView: {
    flex: 1,
    // backgroundColor:"yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 5,
  },
  iconStyle: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
});

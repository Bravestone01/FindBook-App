import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgetScreen from '../Screens/ForgetScreen';
import OTPScreen from '../Screens/OTPScreen';
import SetPasswordScreen from '../Screens/SetPasswordScreen';
import Toast from 'react-native-toast-message';
import HomeScreen from '../Screens/HomeScreen';
import BottomNavigator from './BottomNavigator';
import { KeyboardAvoidingView, Platform } from 'react-native';


// Create the Stack Navigator
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
        {/* <Stack.Screen name="ForgetScreen" component={ForgetScreen} /> */}
        {/* <Stack.Screen name="OTPScreen" component={OTPScreen} /> */}
        {/* <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} /> */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name='BottomNavigator'component={BottomNavigator}/>

       

        
        
      </Stack.Navigator>
  
    </NavigationContainer>
  );
};

export default StackNavigator;

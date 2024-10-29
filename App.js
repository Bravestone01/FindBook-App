import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <>
      
    <StatusBar barStyle="light-content" />
    <StackNavigator/>
    <Toast/>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

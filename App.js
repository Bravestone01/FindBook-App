import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from './ThemeContext';
import { BookmarkProvider } from './BookmarkContext';
export default function App() {
  return (
    <>
      
    <StatusBar barStyle="light-content" />
    <ThemeProvider>
      <BookmarkProvider>
    <StackNavigator/>
    </BookmarkProvider>
    </ThemeProvider>
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

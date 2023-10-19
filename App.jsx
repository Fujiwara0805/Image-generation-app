import React from 'react';
import { View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import CreateTextScreen from './src/screens/CreateTextScreen';
import ChatScreen from './src/screens/ChatScreen';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View>
      <AppBar />
      <ChatScreen />
    </View>
  );
}

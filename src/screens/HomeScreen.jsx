import React from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function HomeScreen() {
  return (
    <View>
      <View>
        <AppBar />
      </View>
      <View>
        <Button name="画像生成" />
      </View>
    </View>
  );
}

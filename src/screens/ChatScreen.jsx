import React, { useState, useCallback } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { OPENAI_API_KEY } from '../../env';

export default function ChatScreen() {
  const [messages, setMessages] = useState('');

  const sendMessageToChatGPT = async (message) => {
    try {
      const req = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo-0301', // 使用するモデル
          messages: [{ role: 'system', content: 'You' }, { role: 'user', content: message }],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      );
      const reply = req.data.choices[0].message.content;
      return reply;
    } catch (error) {
      Alert.alert(error.message);
      return null;
    }
  };

  const handleSend = useCallback(async (newMessage = []) => {
    const userMessage = newMessage[0];
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessage));

    // ChatGPTにメッセージを送信して応答を受け取る
    const reply = await sendMessageToChatGPT(userMessage.text);

    if (reply) {
      const botMessage = {
        _id: Math.random().toString(),
        text: reply,
        createdAt: new Date(),
        user: { _id: 2, name: 'ChatGPT' },
        avatar: 'https://placeimg.com/140/140/any',
      };
      setMessages((previousMessages) => GiftedChat.append(previousMessages, botMessage));
    }
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

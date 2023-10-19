import { React } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { string, shape, func } from 'prop-types';

export default function Button(props) {
  const { name, style, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

Button.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 80,
    width: '100%',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9488DC',
    marginTop: 320,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

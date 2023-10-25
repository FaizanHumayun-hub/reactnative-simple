import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ myAlignment }) => {
  // Define positioning styles based on myAlignment
  const buttonPosition = myAlignment === 'top'
    ? { top: 0, left: '50%' }
    : myAlignment === 'bottom'
    ? { bottom: 0, left: '50%' }
    : myAlignment === 'left'
    ? { top: '50%', left: 0 }
    : myAlignment === 'right'
    ? { top: '50%', right: 0 }
    : {};

  // Conditional rendering for an empty button when myAlignment is not recognized
  if (Object.keys(buttonPosition).length === 0) {
    return <Text>Invalid Alignment</Text>;
  }

  return (
    <TouchableOpacity style={[styles.button, buttonPosition]}>
      <Text style={styles.buttonText}>{myAlignment}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'blue', // Customize the button background color
    width: 150, // Customize the button width
    height: 50, // Customize the button height
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Customize the text color
    fontSize: 16, // Customize the text size
  },
});

export default CustomButton;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import CustomButton from './CustomButton';

import { useNavigation } from '@react-navigation/native';




export default function Quiz1() {

    return (
        <View> 
            <CustomNavbar title="Dashboard" showBackButton={true} />
            <CustomButton myAlignment="top" />
            <CustomButton myAlignment="left" />
            <CustomButton myAlignment="right" />
            <CustomButton myAlignment="bottom" />
            </View>
    );
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 52,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
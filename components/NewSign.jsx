import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Logs } from 'expo'



export default function NewSign() {
  Logs.enableExpoCliLogging(); 
  const navigation = useNavigation();

  const [userData, setUserData] = useState({ email:'', password:'', isDarkMode: false });
  const [finalData, setFinalData] = useState([]);

  const handleChange = (name, value) => { 
    setUserData({ ...userData, [name]: value });
    //setFinalData("");
    //console.log(userData);
   };



const handleSign = async () => {
  console.log("Sign button clicked");

  // Check if email already exists
  const emailExists = finalData.some((data) => data.email === userData.email);

  if (emailExists) {
    console.log("Email already exists");
  } else {
    // Add userData to finalData
    const updatedFinalData = [...finalData, userData];

    setFinalData(updatedFinalData);

    // Reset input field
    setUserData({ email: '', password: '' });

    // Store updated data in AsyncStorage
    try {
      await AsyncStorage.setItem('logData', JSON.stringify(updatedFinalData));
    } catch (error) {
      console.error("Error storing data in AsyncStorage:", error);
    }

    // Retrieve and log data from AsyncStorage
    try {
      const data = await AsyncStorage.getItem('logData');
      if (data) {
        const originalData = JSON.parse(data);
        console.log("This is original data =", originalData);
      } else {
        Alert.alert("Empty field");
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    }
  }
};



  const handleLogin = (event) => {
    console.log("Login button clicked");
    const user = finalData.find((data) => data.email === userData.email);

    if (user) {
      if (user.password === userData.password) {
        console.log("nice");
        Alert.alert("nice");
      }
      else{
        console.log("wrong password");
        Alert.alert("wrong password");
      }
    } else{
      Alert.alert("Email not found. Please try again")
    }
    
  };

  return (
    <SafeAreaView>
    <KeyboardAvoidingView style={{ flex: 1}} behaviour="padding">
      <View style={styles.inputbox}>
        <TextInput
          name="email"
          style={styles.textbox}
          numberOfLines={4}
          maxLength={40}
          placeholder="Email Address"
          value={userData.email}
          onChangeText={(text) => handleChange("email", text)}
        ></TextInput>
        <TextInput
          name="password"
          style={styles.textbox}
          numberOfLines={4}
          maxLength={40}
          placeholder="Password"
          value={userData.password}
          onChangeText={(text) => handleChange("password", text)}
        ></TextInput>
      </View>
      <View style={styles.buttonsection}>
        <Pressable style={styles.button} onPress={handleSign}>
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 100,
  },
  buttonsection: {
    alignItems: "center",
    marginTop: 100,
  },
  textbox: {
    padding: 10,
    width: 280,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 50,
    color: "black",
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 60,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: "black",
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "white",
  }
});

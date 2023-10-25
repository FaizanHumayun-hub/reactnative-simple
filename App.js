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
} from "react-native";
import React, { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ChatScreen from "./components/ChatScreen";
import NewSign from "./components/NewSign";
import Quiz1 from "./components/quiz1";
import CustomButton from "./components/CustomButton";
import CustomNavbar from "./components/CustomNavbar";
import quiz2 from "./components/quiz2";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Books from "./components/Books";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Quiz1"
          component={Quiz1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="quiz2"
          component={quiz2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomNavbar"
          component={CustomNavbar}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="CustomButton"
          component={CustomButton}
          options={{ headerShown: true }}
        /> */}

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="NewSign"
          component={NewSign}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Books"
          component={Books}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

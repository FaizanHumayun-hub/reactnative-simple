import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,Text,View,TextInput,Button,Image,Pressable,Alert,FlatList,TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import faviconImage from "../assets/favicon.png";

import { useNavigation } from "@react-navigation/native";

const myArrayForFlatList = [
  {
    id: "1",
    img: faviconImage,
    name: "Ali Khan",
    msg: "Hello there!",
    time: "10:00 AM",
  },
  {
    id: "2",
    img: faviconImage,
    name: "Ayesha Ahmed",
    msg: "How are you?",
    time: "10:15 AM",
  },
  {
    id: "3",
    img: faviconImage,
    name: "Zainab Hassan",
    msg: "Nice weather today.",
    time: "10:30 AM",
  },
  {
    id: "4",
    img: faviconImage,
    name: "Ahmed Raza",
    msg: "Meeting at 2 PM.",
    time: "11:00 AM",
  },
  {
    id: "5",
    img: faviconImage,
    name: "Sara Khan",
    msg: "Let's catch up soon.", time: "11:30 AM",
  },
  {
    id: "6",
    img: faviconImage,
    name: "Bilal Malik",
    msg: "Have you seen the new movie?",
    time: "12:00 PM",
  },
  {
    id: "7",
    img: faviconImage,
    name: "Nida Ali",
    msg: "Happy birthday!",
    time: "12:30 PM",
  },
  {
    id: "8",
    img: faviconImage,
    name: "Aamir Shah",
    msg: "How's work going?", time: "1:00 PM",
  },
  {
    id: "9",
    img: faviconImage,
    name: "Hina Hassan",
    msg: "Dinner tonight?",
    time: "1:30 PM",
  },
  {
    id: "10",
    img: faviconImage,
    name: "Samiya Khan",
    msg: "See you later!",
    time: "2:00 PM",
  },
];



export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);
  const navigation = useNavigation();
  const handlePress = () => {
    Alert.alert("Well Done!", "You have successfully logged in!");
  };

  const counterCaller = () => {
    navigation.push('Home');
    setCount(count + 1);
    setFlag(flag + 1);
    console.log(count);
  }

  const Chat = (item) => {
    navigation.navigate("ChatScreen", {
      name: item.name,
      img: item.img,
      msg: item.msg,
      time: item.time,
    });
  };

  // useEffect calls itself, useful for auto updates from APIs
  //Without bracket called only once when component is mounted
    useEffect(() => {
      console.log('Without bracket!');
  }, []);

  useEffect(() => {
    console.log('With count!');
}, [count]);

useEffect(() => {
  console.log('With Flag!');
}, [flag]);

  return (
    <View>
      <TouchableOpacity style={styles.topDiv} onPress={counterCaller}>
        <Text style={styles.brandName}>ChatSter {count}</Text>
        <View style={styles.headingsDiv}>
          <Text style={styles.headingText}>Chats</Text>
          <Text style={{ ...styles.headingText, marginLeft: "4%" }}>
            Groups
          </Text>
          <Text style={styles.headingText}>Contacts</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={myArrayForFlatList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "lightgrey",
              height: 80,
              marginBottom: 1,
            }}
            onPress={() => Chat(item)}
          >
            <View
              style={{
                flex: 0.3,
                backgroundColor: "lightgrey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                }}
                source={item.img}
              />
            </View>

            <View style={{ flex: 0.7, backgroundColor: "blue" }}>
              <View style={{ flex: 0.5, backgroundColor: "lightgrey" }}>
                <Text style={{ fontSize: 20 }}> {item.name}</Text>
                <Text style={{ fontSize: 8, marginLeft: 4 }}> {item.msg}</Text>
              </View>
              <View style={{ flex: 0.5, backgroundColor: "lightgrey" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text> {item.msg} </Text>
                  <Text> {item.time} </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 52,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  headingText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  topDiv: {
    backgroundColor: "darkgreen",
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  brandName: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: "white",
    fontWeight: 600,
  },
  headingsDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    alignItems: "center",
    columnGap: 5,
  },
});

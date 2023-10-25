import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,Text,View,TextInput,Button,Image,Pressable,Alert,FlatList,TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import faviconImage from "../assets/favicon.png";
import ubook1 from "../assets/ubook1.jpeg";
import ubook2 from "../assets/ubook2.jpeg";
import ubook3 from "../assets/ubook3.jpeg";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const bookList = [
    {
        id: 1,
        name: "Book",
        img: ubook1,
    },
    {
        id: 2,
        name: "English",
        img: ubook2,
    },
    {
        id: 3,
        name: "Math",
        img: ubook3,
    },
    {
        id: 4,
        name: "Iqbal",
        img: ubook1,
    },
    {
        id: 5,
        name: "Physics",
        img: ubook2,
    },
    {
        id: 6,
        name: "Urdu",
        img: ubook3,
    },
    {
        id: 7,
        name: "Afsana",
        img: ubook1,
    },
    {
        id: 8,
        name: "Novel",
        img: ubook2,
    },
    {
        id: 9,
        name: "Chemistry",
        img: ubook3,
    },
    {
        id: 10,
        name: "Biology",
        img: ubook1,
    },
    {
        id: 11,
        name: "Book1",
        img: ubook2,
    },
    {
        id: 12,
        name: "Book1",
        img: ubook3,
    },
];

export default function Books() {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = (text) => {
        console.log("handle search");
        setSearchText(text);
        const filtered = bookList.filter((book) =>
        book.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredBooks(filtered);
        };
        

    return(
        <View style= {{padding: 10, marginBottom: 50,}}>
            {/* <TouchableOpacity>
                <Text style={styles.searchbar}>Search</Text>
            </TouchableOpacity> */}
            <SafeAreaView>
            <TextInput
            value={searchText}
            numberOfLines={1}
            maxLength={40}
            onChangeText={handleSearch}
            //onChangeText={text => onChangeText(text)}
            onSubmitEditing={handleSearch}
            style={styles.searchbar}
            placeholder="Search"
        
            />

            <FlatList
              data = {filteredBooks.length > 0 ? filteredBooks : bookList}
              //horizontal={false} // To display items in a row when true
              numColumns={3}
              renderItem={({item})=>(
                <TouchableOpacity style={styles.topSection}>
                    <View style={styles.bookSection}>
                        <Image 
                        style={styles.imageSection}
                        source={item.img}
                        />
                        <Text style={styles.bookTitle}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              />
              </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchbar: {
        padding: 10,
        fontSize: 20,
        width: "auto", 
        height: 50, 
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        borderRadius: 50, 
        color: 'black'
    },
    topSection: {
        flex: 1,
        marginTop: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 0,
    },
    bookSection: {
        marginBottom: 50,

    },
    imageSection: {
        width: 100,
        height: 150,
        overflow: "hidden",
    },
    bookTitle: {
        textAlign: 'center', // Center text horizontally
        textAlignVertical: 'center', // Center text vertically
        fontSize: 20,
        fontWeight: 'bold', // fontWeight should be a string
    }
})
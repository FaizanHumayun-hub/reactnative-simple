// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
// import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';




// export default function Home() {

//   const navigation = useNavigation();  
//   const handlePress = () => {
//     navigation.navigate('Dashboard');
//   };
  
  


//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Welcome to Home Screen</Text>
//       <Pressable style={styles.button} onPress={handlePress}>
//       <Text style={styles.text}>Go to Dashboard</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     button: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 15,
//       paddingHorizontal: 52,
//       borderRadius: 50,
//       elevation: 3,
//       backgroundColor: 'black',
//     },
//     text: {
//       fontSize: 16,
//       lineHeight: 21,
//       fontWeight: 'bold',
//       letterSpacing: 0.25,
//       color: 'white',
//     },
//   });

// -------------------------------------------------------------//

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SectionList, FlatList, Image } from 'react-native';
//import CustomButton from './CustomButton';
//import {AppButton} from "./AppButton";
import getInfoHook from './getInfoHook';

//import axios from "axios";

export default function Home() {
  // console.log('Top Most Area');
  const [count, setCount] = useState('');
  const [flag, setFlag] = useState('');
  const [life, setLife] = useState(0);
  const navigation = useNavigation();


//  const {data} = getInfoHook('https://reactnative.dev/movies.json');

const { data, isLoading, fetchData } = getInfoHook('https://reactnative.dev/movies.json');

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  
  // const route = useRoute();
  // const chatwith = route.params.chatwith;

  const [person, setPerson] = useState(global.chatwith);
  
  const setFontBtnPressed = () => {
    // setCount(count+1)
    global.dark = 'black';
    // console.log(global.dark);
    // if (usepostisnotdoneyet){
    //   Alert.alert();
    // }else{
    //   navigation.navigate('Ali');
    // }

    /// 

    // setLife(life+1);
    // setCount(count+1);
  }

  // Atleast 5 to 6 Funtiions call hotay thay
  // Funtion Overriding
  // constructure()
  // componentWillMount()
  // return()
  // componentDidMount() // GET API Call Huee setState()
  // componentDidUpdate() // Update Score
  // componentWillUnMount()

  //iOS
  // init()
  // DidAppear()
  // WillAppear()
  // destructor()

  // Function
  useEffect(()=>{
    console.log('Get Pak vs INDIA Match Score')
    // Get Pak vs INDIA Match Score
  })

  // useEffect(()=>{
  //   // console.log('Khaali useEffect')
  //   axios.get('https://reactnative.dev/movies.json').then((response) => {
  //     console.log('is Data fecthed ???');  
  //     console.log(response.data.movies);
  //     setData(response.data.movies);
  //   });
  // },[])

  useEffect(()=>{
    console.log('life useEffect')
  },[life])

  useEffect(()=>{
    console.log('count useEffect')
  },[count])
  
  useEffect(()=>{
    console.log('life and count useEffect')
  },[life, count])
  
  useEffect(()=>{
    // console.log('');
    // Destructor [iPhone main bohat ziada use hota tha]
    // Empty Global variable
    // global.myvar = 0;
    // setUpdate
    return()=>{
      console.log('I am going back from Home Screen')
    }
  },[])

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'other', 'Other 1'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Mango Cake'],
    },

    {
      title: 'Others',
      data: ['More....', 'More....'],
    },

  ];

  return (
    <View style={styles.container}>
      {console.log('Return is called')}
      <Text style={{fontSize:40}}> This is HOME Component </Text>
      
      
      {/* <CustomButton /> */}
      
      {/* <AppButton
                    btnBgColor={'#2abec7'}
                    btnPadding={10}
                    btnPress={this._LoginFunction}
                    btnTextSize={18}
                    btnTitle={'list'}
                    textColor={'#000'}
                /> */}
      
      <Text style={{fontSize:40}}>
        
         
         </Text>


         {isLoading ? (
        <Text>Loading data...</Text>
      ) : data ? (
        <FlatList
          data={data.movies}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                height: 80,
                marginBottom: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              //onPress={() => chatBtnPressed(item)}
            >
              <View style={{ flex: 0.25 }}></View>
              <View style={{ flex: 0.50 }}>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                <Text style={{ fontSize: 20 }}>{item.releaseYear}</Text>
              </View>
              <View style={{ flex: 0.25 }}>
                <Text>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No data available.</Text>
      )}
    {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      
      renderItem={({item}) => (
        
        <View style={{backgroundColor:'grey', height:30}}>
          <Text style={{fontSize:20, color:'white'}}>{item}</Text>
        </View>
      )}
      
      renderSectionHeader={({section: {title}}) => (
        
        <View style={{backgroundColor:'green', height:60}}>
          <Text style={{fontSize:20, color:'white'}}>{title}</Text>
        </View>
      )}
    /> */}

      <TouchableOpacity style={styles.button} onPress={setFontBtnPressed}>
        <Text style={{color:'white'}}> Set Font </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SectionList, FlatList, Image } from 'react-native';
//import CustomButton from './CustomButton';
//import {AppButton} from "./AppButton";

import axios from "axios";

import getApiHook from "./GetApiHook";

export default function Home1() {
 
  const { data } = getApiHook('hjhjh');
  
  // console.log('Top Most Area', getData);

  const [count, setCount] = useState('');
  const [flag, setFlag] = useState('');
  const [life, setLife] = useState(0);
  // const [data, setData] = useState(0);
  const navigation = useNavigation();
  
  // const route = useRoute();
  // const chatwith = route.params.chatwith;

  const [person, setPerson] = useState(global.chatwith);
  const [mymovies, setMymovies] = useState('');

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

  useEffect(()=>{
    
    // axios.get('https://reactnative.dev/movies.json').then((response) => {
    //   console.log('Movies Data ==')
    //   console.log(response.data.movies)
    //   setMymovies(response.data.movies)
    // });

    // Sign In ya Sign Up karna hai to POST API
    // axios.post('https://lettech.com/login?', 
    // {username:'akhzar', pwd:'123456'}, {})

    // POST Sign In 
    // axios.post('https://lettech.com/login?', 
    // {username:'akhzar', pwd:'123456'}, {})

     // POST Sign Up 
    //  axios.post('https://lettech.com/signup?', 
    //  {username:'akhzar', pwd:'123456'}, {})

    // POST Update 
    // axios.post('https://lettech.com/update?', 
    // {username:'akhzar1', pwd:'1234568'}, {})
    // 9 years i have used POST API to do all operations

    // PUT 
    // axios.put('https://lettech.com/signup?', 
    // {username:'akhzar', pwd:'123456'}, {})
  
  },[])

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

  const movies = [
    {
    "id": "1",
    "title": "Star Wars",
    "releaseYear": "1977"
    },
    {
      "id": "2",
      "title": "New Movie",
      "releaseYear": "1977"
      },
    {
    "id": "2",
    "title": "Back to the Future",
    "releaseYear": "1985"
    },
    {
    "id": "3",
    "title": "The Matrix",
    "releaseYear": "1999"
    },
    {
    "id": "4",
    "title": "Inception",
    "releaseYear": "2010"
    },
    {
    "id": "5",
    "title": "Interstellar",
    "releaseYear": "2014"
    }
    ]

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
        
         Person Name = {person.title}      
                Person City = {person.city}
         </Text>


         <FlatList
        data={data}
        renderItem={({ item }) =>
        (
          <TouchableOpacity style={ { 
            flex: 1, 
            flexDirection: 'row', 
            height: 80, 
            marginBottom: 30, 
            alignItems: 'center', 
            justifyContent: 'center' }}
            onPress={()=>chatBtnPressed(item)}>
            <View style={{ flex: 0.25 }}>

             

            </View>
            <View style={{ flex: 0.50 }}>

              <Text style={{fontSize:20}}> {item.title} </Text>
              <Text style={{fontSize:20}}> {item.releaseYear} </Text>

            </View>
            <View style={{ flex: 0.25 }}>
              <Text> {item.time} </Text>

            </View>
          </TouchableOpacity>
        )
        }
        keyExtractor={item => item.id}
      />
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
    padding: 10,
  },
});

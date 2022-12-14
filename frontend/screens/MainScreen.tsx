import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, ImageBackground,Alert, ScrollView,TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { UserContext } from '../contexts/UserContext';
import { RootStackScreenProps } from '../types';
import { Asset } from 'expo-asset';

export default function MainScreen({ navigation }: RootStackScreenProps<'Main'>) {
  const {token} = React.useContext(UserContext);
  return (
  
    <View style={{flex: 1}}>
    <View style={styles.Presenation}>
      <ImageBackground source = {require("../assets/images/5.jpg")} blurRadius={5} resizeMode="cover" style={styles.image}>
        <Text style = {styles.title}>
          Une experience unique, seulement sur Zone of Zen.
          
        </Text>

        <Text style = {styles.text}>
        Dans un ambiance chaleureuse,souritante et reposante ici le temps marque une pause, la votre.
        </Text>
        {!token? 
        <Button style={{marginTop:20}} mode='contained' buttonColor='black' textColor='#bc6c25' onPress={() => navigation.navigate("Login")}>
            <Text style={{fontFamily:'San-Francisco', color:'#bc6c25', fontWeight:'bold'}} >Nous rejoindre</Text>
        </Button>
        :
        <View/>
        }
      </ImageBackground>
      
    </View>
    <View style={{flexGrow: 1, backgroundColor: 'black', alignItems: 'center',display:'flex'}}>
    <ImageBackground source = {require("../assets/images/cover.png")} blurRadius={5} resizeMode="cover" style={styles.image}>
      <Text style = {styles.text_offre}>
          Nos offres  
      </Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
       <ScrollView
        horizontal={true}
        contentContainerStyle={{width:innerWidth}} 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
          
        <TouchableOpacity onPress={() => {
          !token ? navigation.navigate("Login") : navigation.navigate("Article")
          }}>
        <Image source={require("../assets/images/2.png")} style={styles.offres} ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          !token ? navigation.navigate("Login") : navigation.navigate("Article")
          }}>
        <Image source={require("../assets/images/3.png")} style={styles.offres} ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          !token ? navigation.navigate("Login") : navigation.navigate("Article")
          }}>
        <Image source={require("../assets/images/4.png")} style={styles.offres} ></Image>
        </TouchableOpacity>

      </ScrollView>
      <Button style={{marginTop:20}} mode='contained' buttonColor='black' textColor='#bc6c25' onPress={() => navigation.navigate("Chatbox")}>
          <Text style={{fontFamily:'San-Francisco', color:'#bc6c25', fontWeight:'bold'}} >Nous Contacter</Text>
      </Button>
      </View>
      </ImageBackground>
    </View>
  </View>
  )



  //     {!token?
  //       <Button onPress={()=>{navigation.navigate("Login")}} text="Login"/>
  //     : <View/>}
  //     </ImageBackground>
  //   </View>
  // );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
  },

  title: {
    fontSize: 15,
    color:'#fdb833',
    fontFamily:'San-Franisco',
    marginTop:10,
 
  
  },

  button: {
    alignItems: 'center',
    marginBottom:10,
    paddingHorizontal: 1,
    borderRadius: 3,
    marginTop:15,
    elevation: 1,
    backgroundColor: 'black',
  },

  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  },

  Presenation : {
    height:"30vh",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fefae0",    
  },

  separator: {
    marginVertical: 30,
    height:'0.1%',
    borderRadius:1,
    backgroundColor:"white",
    width: '100%',
    color:"white"
  },

  text_introduction: {
    color: "#bc6c25",
    fontSize: 19,
    width:"40%",
    marginTop:50,
    fontFamily:'San-Francisco',
    fontWeight:'bold',

  },
  text: {
    color: "#bc6c25",
    fontSize: 14.5,
    width:"90%",
    marginTop:3,
    fontFamily:'San-Francisco',
    fontWeight:'bold',

  },

  text_offre: {
    fontSize: 15,
    color:'#fdb833',
    fontFamily:'San-Francisco',
    marginBottom:50,
  },

  offres : {
    width:200,
    height:'30vh',
    margin:10,
    borderBottomStartRadius:30,
    borderTopLeftRadius:30,
   },

  
});

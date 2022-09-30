import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Carousel from './Carousel'
import  Header  from '../components/Header';
import Footer from '../components/Footer';
import { useRef } from 'react';

import ButtonLetsGo from '../components/ButtonLetsGo';

export default function Welcome({navigation}) {

  const scrollRef = useRef()
  return (
      <ScrollView ref={scrollRef}>
    <View style={styles.container}>
      <Header />
      <Text style={styles.text2}>Take the trip of you always wanted, to the city of your drems</Text>
      <View style={styles.calltoaction}>
          <ButtonLetsGo navigation={navigation} />
      <Image style={styles.img} source={require('../assets/img/arrow.png')} />
      <Text style={styles.text2}>Tap here to see the best destinys</Text>
      </View>
      <StatusBar style="auto" />
      <Carousel />
      <Footer />
      <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
      {/* <Button  title="Top" onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}/> */}
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight:'100%'
  },
  text:{
    fontSize:70,
    color: '#fff',
    marginBottom:30
  },
  text2:{
    fontSize:30,
    color: '#fff',
    textAlign:'center',
    marginBottom:30,
  },
  img:{
   width: 90,
   height:140,
  },
  calltoaction:{
    flex:1,
    alignItems:'center',
  },
  goTop:{
    color: "white",
    fontSize: 25,
    paddingVertical:20,
    backgroundColor:"#32D",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  }
});

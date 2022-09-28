import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from './Carousel'
import Cities from './Cities';
import  Header  from '../components/Header';
import Footer from '../components/Footer';
import { useRef } from 'react';
export default function Welcome() {

  const scrollRef = useRef()
  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef}>
      <Header />
      <Text style={styles.text2}>Take the trip of you always wanted, to the city of your drems</Text>
      <View style={styles.calltoaction}>
        <Button title="Let's go" color={'#B465FF'} onPress={() => Alert.alert('KE APRETAS')}></Button>
      <Image style={styles.img} source={require('../assets/img/arrow.png')} />
      <Text style={styles.text2}>Tap here to see the best destinys</Text>
      </View>
      <StatusBar style="auto" />
      <Carousel />
      <Footer />
      <Button style={styles.goTop} title="Top" onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
});

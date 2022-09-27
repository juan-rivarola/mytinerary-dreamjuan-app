import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CitiesCard from './CitiesCard'
import Footer from './Footer';
import Cities from './Cities';
export default function Welcome() {
  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
         <Text style={styles.title.my}>My</Text>
         <Text style={styles.title.tin}>Tinerary</Text>
      </View>
      <ScrollView>
      <Text style={styles.text2}>Take the trip of you always wanted, to the city of your drems</Text>
      <View style={styles.calltoaction}>
        <Button title="Let's go" color={'#B465FF'} onPress={() => Alert.alert('KE APRETAS')}></Button>
      <Image style={styles.img} source={require('../assets/img/arrow.png')} />
      <Text style={styles.text2}>Tap here to see the best destinys</Text>
      </View>
      </ScrollView>

      <StatusBar style="light" />
      <CitiesCard />
      <Footer />
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
  title:{
     flex:0,
     flexDirection:'row',
    my:{
        fontSize:70,
        color:'rgb(244, 89, 0)'
    },
    tin:{
        fontSize:70,
        color:'brown',
    }
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

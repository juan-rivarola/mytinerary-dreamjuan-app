import { useState } from "react"
import { FlatList, View,Text,Image,StyleSheet } from "react-native"
import { useAllQuery } from "../features/citiesApi"

function City (){
    // const [cities,setCities] = useState([
    //     {id: "1" , src: require("../assets/img/Tokyo.jpg") ,name:"Tokyo"},
    //     {id: "2" , src: require("../assets/img/BuenosAires.jpg") ,name:"Buenos Aires"},
    //     {id: "3" , src: require("../assets/img/Lima.jpg") ,name:"Lima"},
    //     {id: "4" , src: require("../assets/img/RioDeJaneiro.jpg") ,name:"Rio De Janeiro"},
    //     {id: "5" , src: require("../assets/img/Athens.jpg") ,name:"Athens"},
    //     {id: "6" , src: require("../assets/img/Havana.jpg") ,name:"Havana"},
    //     {id: "7" , src: require("../assets/img/LasVegas.jpg") ,name:"Las Vegas"},
    //     {id: "8" , src: require("../assets/img/London.jpg") ,name:"London"},
    //     {id: "9" , src: require("../assets/img/LosAngeles.jpg") ,name:"Los Angeles"},
    //     {id: "10" , src: require("../assets/img/Paris.jpg") ,name:"Paris"},
    //     {id: "11" , src: require("../assets/img/Rome.jpg") ,name:"Rome"},
    //     {id: "12" , src: require("../assets/img/Sydney.jpg") ,name:"Sydney"}
    // ])
    const search = ''
   let {data:cities} = useAllQuery(search)
   console.log(cities)

    return (
            <FlatList 
                horizontal={true}
                data={cities}
                renderItem={({item}) =>(
                    <View>
                        <Image source={item.image} style={styles.img}/>
                        <Text style={styles.country}>{item.name}</Text>
                    </View>
            )} />
    )   
}

const styles = StyleSheet.create({
    img:{
        width: 205,
        height: 205
    },
    country:{
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "rgb(163, 163, 163)"
    }
})

export default City
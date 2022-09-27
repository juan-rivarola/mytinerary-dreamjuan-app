import { Text, View,StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default function Cities(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search country" /> 
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor: "black"
    },
    input:{
        padding: 10,
        margin:20,
        width: 350,
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center"
    }
})
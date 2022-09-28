
import { Button, View,StyleSheet, Image,Text,scrollTo,window, Dimensions } from "react-native"
function Footer (){
    let date = new Date();
    let year = date.getFullYear();
    return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Image style={styles.redSocial} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"}} />
                    <Image style={styles.redSocial} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"}} />
                    <Image style={styles.redSocial} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"}} />
                </View>
                    <View style={styles.button}>
                        <Text style={styles.date}> © {year} MyTinerary all rights reserved </Text>
                    </View>
            </View>
    ) 
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#111",

    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    button:{
        // flexDirection: "row",
    },
    redSocial:{
        marginTop:40,
        height: 60,
        width: 60,
        marginBottom:40
    },
    goTop:{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        flexDirection: "row"
    },
    date:{
        color:"white",
        textAlign: "center",
        marginVertical: 30,
        fontSize:20
    }
})

export default Footer
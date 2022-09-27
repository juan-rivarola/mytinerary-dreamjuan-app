import { Button, View,StyleSheet } from "react-native"

function Footer (){
    return (
            <View style={styles.buttons}>
                <Button style={styles.button} title="Home"></Button>
                <Button style={styles.button} title="Menu"></Button>
                <Button style={styles.button} title="Profile"></Button>
            </View>

    ) 
}
const styles = StyleSheet.create({
    buttons:{
        // flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
    },

})

export default Footer
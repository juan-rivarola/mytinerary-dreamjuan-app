import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.title.my}>My</Text>
            <Text style={styles.title.tin}>Tinerary</Text>
        </View>
      {/* <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/3711/3711310.png",}} style={styles.img}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 40,
    height: 120,
    width: "100%"
  },
  title: {
    flexDirection: "row",
    my: {
        fontSize: 70,
        color: "rgb(244, 89, 0)",
    },
    tin: {
        fontSize: 70,
        color: "brown",
    },
  },
  img: {
    height: 60,
    width: 60,
    marginStart: 20,
  },
});

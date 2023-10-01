import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

function WordOfDay() {
  return (
    <View style={styles.container}>
      <AppText style={styles.title} text={"Word Of The Day"} />
      <AppText
        style={styles.content}
        text={
          'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. 16 "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    borderRadius: 15,
    backgroundColor: "#50C878",
  },
  content:{
    color:"white",
    lineHeight:24,
    fontSize:16
  },
  title: {
    justifyContent: "flex-start",
    fontWeight: "900",
    fontSize: 24,
    color: "white",
  },
});
export default WordOfDay;

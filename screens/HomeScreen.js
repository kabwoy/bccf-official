import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TopAppBar from "../components/TopAppBar";
import WordOfDay from "../components/WordOfDay";
import CardItem from "../components/CardItem";
import AppGrid from "../components/AppGrid";
function HomeScreen() {
  return (
    <View>
      <TopAppBar />
      <View style={styles.container}>
        <WordOfDay />
        {/* <CardItem/> */}
        <AppGrid/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
export default HomeScreen;

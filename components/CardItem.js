import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AppText from './AppText'
import { FlatGrid } from "react-native-super-grid";
function CardItem() {
  return (
    <View style={{}} >
        <FlatGrid
          itemDimension={130}
          data={[{
            title:"Register",
            body:"Become a member of our congregation"
          },
          {
            title:"Title",
            body:"body......."
          },
          {
            title:"Title Comes Here",
            body:"body......."
          },
          {
            title:"Title",
            body:"body......."
          },
          ]}
          renderItem={({ item }) => (
            <TouchableHighlight underlayColor={"#CCCCCC"} style={styles.renderItem} onPress={()=>console.log("clicked")}>
            <View >
                <Text style={styles.itemTitle} >{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
            </TouchableHighlight>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"60%",
        marginTop:10,
        padding:15,
        backgroundColor:"blue"
    },
    renderItem:{
        padding:10,
        backgroundColor:"#C0C0C0",
        height:150,
        borderRadius:15,
        overflow:"hidden",
        elevation:10,
    },
    itemTitle:{
        textAlign:"left",
        fontWeight:'bold',
        fontSize:16
    }
})
export default CardItem
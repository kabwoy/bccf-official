import React from 'react'
import { View , StyleSheet, Text, TouchableHighlight } from 'react-native'

function AppButton({onPress , title}) {
  return (
    <TouchableHighlight underlayColor={'green'}  style={styles.button} onPress={onPress}>
   <View>
      <Text style={styles.buttonText}>{title}</Text> 
   </View>
   </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:"#6dc993",
    padding:15,
    marginTop:10,
    borderRadius:10,
    textAlign:"center"
  },
  buttonText:{
    textAlign:"center",
    fontWeight:"500",
    color:"white",
    fontSize:16
  }
})

export default AppButton
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function AppTextInput({placeholder , label , obSecureText = false , keyboardType , onChangeText , ...other}) {
  return (
    <View style={styles.textInput}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput {...other} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={obSecureText}  placeholder={placeholder} />
    </View>
  );
}
const styles = StyleSheet.create({
    labelText:{
      position:"absolute",
      top:-10,
      left:18,
      fontWeight:'600',
      color:"#9999CC"
  
    },
    textInput:{
      backgroundColor:"#DADADA",
      borderRadius:10,
      marginTop:20,
      padding:12,
    }
  })
export default AppTextInput;

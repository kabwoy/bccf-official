import React from 'react'
import { StyleSheet, Text } from 'react-native'

function AppText({text , style}) {
  return (
    <Text style={[styles.labelText , style]} >{text}</Text>
  )
}

const styles = StyleSheet.create({
    labelText:{
        fontSize:16,
        fontWeight:400
    }
})
export default AppText
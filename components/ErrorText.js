import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ErrorText({error , visible}) {
    if(!error || !visible) return null
  return (
   <View>
    <Text style={styles.errorText} >{error}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    errorText:{
        color:"red",
        fontWeight:"500"
      },
})
export default ErrorText
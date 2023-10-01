import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
function Screen({children}) {
  return (
   <SafeAreaView style={styles.container} >
    {children}
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
       
        paddingTop:Constants.statusBarHeight
    }
})
export default Screen
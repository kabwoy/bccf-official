import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import Screen from './Screen'
import AppText from './AppText'
import { useAuth } from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

function TopAppBar() {
  const navigation = useNavigation()
  const [email , setEmail] = useState()
  useAuth().then((user)=>{
    setEmail(user.email)
  })
  function navigateToUserProfile(){
    navigation.navigate("profile")
  }
  return (
    <Screen>
   <View style={styles.appBarContainer}>
    <View style={styles.titleContainer}>
    <AppText text={'Good Evening👋'}/>
    <AppText style={styles.nameText} text={email}/>
    </View>
    
    <View>
    <TouchableHighlight underlayColor={'#fff'}  onPress={navigateToUserProfile}>
    <Image style={styles.avatar}  source={require("../assets/avatar.jpg")} />
    </TouchableHighlight>
    </View>
    
   </View>
   </Screen>
  )
}

const styles = StyleSheet.create({
    appBarContainer:{
        width:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        // backgroundColor:"blue",
        padding:15,
    },
    avatar:{
      width:50,
      height:50,
      borderRadius:25
    },
    nameText:{
      fontWeight:"900",
      fontSize:20
    },
    titleContainer:{
        
    }
})
export default TopAppBar
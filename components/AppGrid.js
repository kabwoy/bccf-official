import React, { useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import TileOption from './TileOption'

function AppGrid() {
    const [menuOptions , setMenuOptions] = useState([
        {
            id:1,
            title:"Register",
            content:"Register and become one of us , click here to register now!",
            screen:"register"
        },
        {
            id:2,
            title:"Announcemets",
            content:"Get the latest announcements",
            screen:"announcements"
        },
        {
            id:3,
            title:"Scheduler",
            content:"Register and become one of us",
            screen:"scheduler"
        },
        {
            id:4,
            title:"About Bccf",
            content:"Register and become one of us",
            screen:"about",

        },
    ])
  return (
    <FlatList
        style={styles.container}
        data={menuOptions}
        renderItem={({item})=><TileOption screenName={item.screen} style={styles.renderItem} title={item.title} content={item.content} />}
        keyExtractor={item => item.id}
        numColumns={2}
    />
  )
}
const styles = StyleSheet.create({
    container:{
      
    },
    renderItem:{
        backgroundColor:"#C0C0C0" , 
        width:"50%", 
        height:200, 
        marginTop:5, 
        marginRight:5, 
        borderRadius:18,
        overflow:"hidden",
        padding:15
    },
})
export default AppGrid
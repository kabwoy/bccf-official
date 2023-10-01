import React from 'react'
import AppText from './AppText'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function TileOption({title , content  , screenName ,...others}) {
  const navigation = useNavigation()
  return (
    <TouchableHighlight style={others.style} underlayColor={'green'} onPress={()=>navigation.navigate(screenName)}>
    <View>
        <AppText style={styles.title} text={title} />
        <AppText text={content} />
    </View>
    </TouchableHighlight>
    
  )
}
const styles = StyleSheet.create({
      title:{
        fontWeight:"900",
        fontSize:18
      }
})

export default TileOption
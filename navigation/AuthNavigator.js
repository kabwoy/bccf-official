import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

const AuthNavigator = ()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OtherNavigator from './OtherNavigator';

const Tab = createBottomTabNavigator()

const AppNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown:false , tabBarIcon:({size}) => <MaterialCommunityIcons name='home' size={size} />}}   name='Home' component={OtherNavigator} />
            <Tab.Screen name='Notifications' component={SignUp} options={{tabBarIcon:({size})=><MaterialCommunityIcons name='bell' size={size} /> , tabBarBadge:"3" , tabBarBadgeStyle:{fontSize:13}}} />
        </Tab.Navigator> 
    )
}


export default AppNavigator

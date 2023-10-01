import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Announcements from "../screens/Announcements";
import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";
import Scheduler from "./Scheduler";
import UserProfile from "../screens/UserProfile";

const Stack = createNativeStackNavigator();

const OtherNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homepage" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="profile"  component={UserProfile} />
      <Stack.Screen name="register" options={{headerBackTitle:"Register"}} component={Register} />
      <Stack.Screen name="announcements" component={Announcements} />
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="scheduler" component={Scheduler} />
    </Stack.Navigator>
  );
};

export default OtherNavigator;

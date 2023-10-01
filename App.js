import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { supabase } from "./supabase/init";
import { useEffect, useState } from "react";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  const [user, setUser] = useState();
  async function getUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) return console.log(error);
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

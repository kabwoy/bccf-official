import React, { useEffect, useState } from "react";
import { Formik} from "formik";
import Screen from "../components/Screen"; 
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import * as Yup from 'yup'
import ErrorText from "../components/ErrorText";
import { supabase } from "../supabase/init";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

const loginSchema = Yup.object().shape({
  email:Yup.string().required().email(),
  password:Yup.string().min(6).required()
})

function Login() {
  const navigation = useNavigation()
  const [loading , setLoading] = useState(false)
  async function handleLogin(values){
    try {
      setLoading(true)
      const {data , error} = await supabase.auth.signInWithPassword({password:values.password , email:values.email})
      setLoading(false)
      if(error) return Alert.alert("Error!" , error.message)
      alert("Looged In😁")
      return navigation.dispatch(StackActions.replace('Home'))
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
     <Formik validationSchema={loginSchema} initialValues={{ email: "", password: "" }} onSubmit={handleLogin}>
      {({handleSubmit , errors , handleChange , setFieldTouched , touched}) => (
        <>
        <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.image} source={require("../assets/bccf-logo.png")} />
          <Text style={styles.subText} >A Place Of Destiny</Text>
        </View>
          <Screen>
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange('email')}
              keyboardType={"email-address"}
              placeholder={"Email"}
              label={"Email"}
            />
            <ErrorText visible={touched.email} error={errors.email} />
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange('password')}
              obSecureText={true}
              placeholder={"Password"}
              label={"password"}
            />
             <ErrorText visible={touched.password} error={errors.password} />
            <AppButton title={'Login'} onPress={handleSubmit}  />
            {/* <AppButton title={'pick'} onPress={async ()=> await ImagePicker.launchImageLibraryAsync({mediaTypes:ImagePicker.MediaTypeOptions.Images})}  /> */}
          </Screen>
          </View>
        </>
      )}
    </Formik>
  
    
  );
}

const styles = StyleSheet.create({
  errorText:{
    color:"red",
    fontWeight:"500"
  },
    formContainer:{
      flex:1,
      justifyContent:"center",
      padding:15
    },
    logoContainer:{
      alignItems:"center",
    },
    image:{
      overflow:"hidden",
      borderRadius:8
    },
    subText:{
      marginTop:4,
      fontWeight:"600",
      fontSize:18,
      color:"orange"
    }
})
export default Login

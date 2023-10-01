import React from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup"
import ErrorText from "../components/ErrorText";
const registerSchema =  Yup.object().shape({
    first_name:Yup.string().required(),
    last_name:Yup.string().required(),
    phone_number:Yup.string().required(),
    address:Yup.string().required(),
    gender:Yup.string().required(),
    branch_id:Yup.number().required(),
})
function Register() {
  const handleRegister = (values) => {
    console.log(values);
  };
  return (
    <ScrollView>
    <Formik
      validationSchema={registerSchema}
      initialValues={{ first_name: "", last_name: "" , phone_number: ""  , address: ""  , gender: "" , branch_id:0  }}
      onSubmit={handleRegister}
    >
      {({ handleSubmit, handleChange , errors , setFieldTouched , touched }) => (
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/bccf-logo.png")}
            />
            <Text style={styles.subText}>A Place Of Destiny</Text>
          </View>

          <AppTextInput
            onBlur={() => setFieldTouched('first_name')}
            onChangeText={handleChange("first_name")}
            placeholder={"first name"}
            label={"first name"}
          />
          <ErrorText visible={touched.first_name} error={errors.first_name} />
          <AppTextInput
            onBlur={() => setFieldTouched('last_name')}
            onChangeText={handleChange("last_name")}
            placeholder={"last name"}
            obSecureText
            label={"last name"}
          />
          <ErrorText visible={touched.last_name} error={errors.last_name} />
          <AppTextInput
            onBlur={() => setFieldTouched('phone_number')}
            onChangeText={handleChange("phone_number")}
            placeholder={"phone number"}
            obSecureText
            label={"phone number"}
          />
          <ErrorText visible={touched.phone_number} error={errors.phone_number} />
          <AppTextInput
            onBlur={() => setFieldTouched('address')}
            onChangeText={handleChange("address")}
            placeholder={"address e.g uthiru ..."}
            obSecureText
            label={"address"}
          />
          <ErrorText visible={touched.address} error={errors.address} />
          <AppTextInput
            onBlur={() => setFieldTouched('gender')}
            onChangeText={handleChange("gender")}
            placeholder={"gender"}
            obSecureText
            label={"gender"}
          />
          <ErrorText visible={touched.gender} error={errors.gender} />

          <AppTextInput
            onBlur={() => setFieldTouched('gender')}
            onChangeText={handleChange("gender")}
            placeholder={"gender"}
            obSecureText
            label={"gender"}
          />
          <ErrorText visible={touched.address} error={errors.address} />

          
          <AppButton onPress={handleSubmit} title={"Register"} />
        </View>
      )}
    </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  image: {
    overflow: "hidden",
    borderRadius: 8,
  },
  subText: {
    marginTop: 4,
    fontWeight: "600",
    fontSize: 18,
    color: "orange",
  },
});
export default Register;

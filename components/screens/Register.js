import React, {useEffect, useState} from 'react'
import {View, Text, Button, Alert, ScrollView} from 'react-native'
import { StyleSheet,Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback,ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, database} from "../firebase/firebase";
import {onValue, ref, set} from "firebase/database";

let statusLogin = false;

const Register = ({navigation}) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    function CreateUserData(userid,name) {

        set(ref(database, '/nguoidung/'+ userid),
            {
                username: name
            }
        ).then(r =>console.log('them nguoidung thanh cong')) ;
    }

    const createAccount = () => {

        if(password!==confirmPassword)
        {
            Alert.alert('Xác nhận mật khẩu không chính xác');
        }

        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('Registered with:', user.email);

                    CreateUserData(user.uid,username);
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    alert(errorMessage);

                });
        }

    }



    return (
       <ScrollView>
           <View style={styles.container}>
               <Text style={styles.text}>Tạo tài khoản</Text>

               <FormInput
                   labelValue={username}
                   onChangeText={(username) => setUsername(username)}
                   placeholderText="Username"
                   iconType="user"
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
               />

               <FormInput
                   labelValue={email}
                   onChangeText={(userEmail) => setEmail(userEmail)}
                   placeholderText="Email"
                   iconType="user"
                   keyboardType="email-address"
                   autoCapitalize="none"
                   autoCorrect={false}
               />


               <FormInput
                   labelValue={password}
                   onChangeText={(userPassword) => setPassword(userPassword)}
                   placeholderText="Mật khẩu"
                   iconType="lock"
                   secureTextEntry={true}
               />

               <FormInput
                   labelValue={confirmPassword}
                   onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                   placeholderText="Xác nhận lại mật khẩu"
                   iconType="lock"
                   secureTextEntry={true}
               />

               <FormButton
                   buttonTitle="Đăng ký"
                   onPress={() => {

                       createAccount(email, password);


                   }}
               />

               <View style={styles.textPrivate}>
                   <Text style={styles.color_textPrivate}>
                       By registering, you confirm that you accept our{' '}
                   </Text>
                   <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                       <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                           Terms of service
                       </Text>
                   </TouchableOpacity>
                   <Text style={styles.color_textPrivate}> and </Text>
                   <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                       Privacy Policy
                   </Text>
               </View>



               <TouchableOpacity
                   style={styles.navButton}
                   onPress={() => navigation.goBack()}
               >
                   <Text style={styles.navButtonText}>Đã có tài khoản? Đăng nhập</Text>
               </TouchableOpacity>
           </View>
       </ScrollView>
    );
};

export default Register;
export {statusLogin};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});

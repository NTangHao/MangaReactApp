import React, {useState} from 'react';

import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import {auth} from "../firebase/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {COLORS} from "../../constants";


const PasswordReset = () => {
    const [email, setEmail] = useState();
    const SendResetEmail = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                Alert.alert('Gửi mail thành công');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                Alert.alert('Gửi mail thất bại');
            });


    }
    return (
   <View>
       <ScrollView>
           <Text style={[styles.text_footer, {
               marginTop: 35
           }]}>Nhập email tài khoản</Text>
           <View style={styles.action}>
               <Feather
                   name="mail"
                   color="#05375a"
                   size={20}
               />
               <TextInput
                   labelValue={email}
                   placeholder="Nhập email tài khoản"
                   onChangeText={(email) => setEmail(email)}
                   style={styles.textInput}
                   autoCapitalize="none"

               />

           </View>
           <TouchableOpacity style={styles.commandButton} onPress={() => SendResetEmail()}>
               <Text style={styles.panelButtonTitle}>Gửi mail</Text>
           </TouchableOpacity>
       </ScrollView>
   </View>
    );
};

export default PasswordReset;
const styles = StyleSheet.create({
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FF6347'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});

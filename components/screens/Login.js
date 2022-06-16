import React, {useState} from 'react'
import {View, Text, Button, ScrollView} from 'react-native'
import {
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import FormInput from "../InputComponent/FormInput";
import FormButton from "../InputComponent/FormButton";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";
import {statusLogin} from "./Register";

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                console.log('Login with:', user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/*<Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />*/}
            <Text style={styles.text}>MangaNet</Text>

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

            <FormButton
                buttonTitle="Đăng nhập"
                onPress={() => handleLogin(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {
                navigation.navigate('PasswordReset');
            }}>
                <Text style={styles.navButtonText}>Quên mật khẩu</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.navButtonText}>
                    Tạo tài khoản
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
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
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    }

});

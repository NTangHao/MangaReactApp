import React from 'react';

import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FormInput from "../InputComponent/FormInput";
import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebase";
import { getAuth, updatePassword } from "firebase/auth";
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from "../../constants";

const ChangePassword = ({ route, navigation }) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });


    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const ChangePassword = () => {
        const user = auth.currentUser;

        if (data.password!=data.confirm_password)
        {
            Alert.alert('Xác nhận mật khẩu không chính xác');
        }
        else{
            updatePassword(user, data.password).then(() => {
                // Update successful.
                Alert.alert('Đổi mật khẩu thành công');
                console.log('doi mat khau thanh cong')
            }).catch((error) => {
                Alert.alert('Đổi mật khẩu thất bại');
                console.log(error);
            });
        }


    }

    return (
        <View >
            <ScrollView>

                {/*New Password*/}
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Mật khẩu mới</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Mật khẩu mới"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                {/*Confirm new password*/}
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Xác nhận mật khẩu mới</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => {
                    if (data.password==='' ){
                        Alert.alert(
                            "Lỗi",
                            "Bạn chưa nhập mật khẩu mới?",
                            [

                                { text: "Ok", onPress: () => {

                                        // const index = myManga.findIndex(result => result.title === props.item.title);


                                    } }
                            ]
                        );
                    }
                    else{
                        ChangePassword()
                    }
                    //ChangePassword();
                   /* console.log(data.password);*/
                }}>
                    <Text style={styles.panelButtonTitle}>Cập nhật</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );
};

export default ChangePassword;
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
        alignSelf: 'center',
        marginTop: 10,
        width: 400,
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
        fontSize: 18,
        paddingLeft: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 20,

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

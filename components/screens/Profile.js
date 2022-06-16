import React, {useEffect, useState} from 'react';

import {Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {auth, database} from "../firebase/firebase";
import {signOut} from "firebase/auth";
import {StackActions, useNavigation} from "@react-navigation/native";
import {onValue, ref} from "firebase/database";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from "../../constants";
const Profile = ({ route, navigation }) => {
    const [userData, setUserData] = useState(null);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('log out thành công');
        }).catch((error) => {
            console.log(error.message)

        });
    }
    const [myMangas, setMyMangas] = useState([]);
    useEffect(() => {

        const starCountRef = ref(database, 'bookmark/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setMyMangas(snapshot.val());
        });
    }, []);
    /*Lấy dữ liệu người dùng*/

    const [dataUser, setDataUser] = React.useState();
    useEffect(() => {

        const starCountRef = ref(database, 'nguoidung/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            setDataUser(snapshot.val());

        });
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: COLORS.black}}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.userImg}
                    source={{uri: 'https://i.imgur.com/mKeQ9LV.jpeg'}}
                />
                <Text style={styles.userName}>{dataUser?.username}</Text>

                <Text style={styles.aboutUser}>
                    {userData ? userData.about || 'No details added.' : ''}
                </Text>
                <View style={styles.userBtnWrapper}>
                    <>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => {
                                navigation.navigate('EditProfile');
                            }}>
                            <Text style={styles.userBtnTxt}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={() => {
                            navigation.navigate('ChangePassword');
                        }}>
                            <Text style={styles.userBtnTxt}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={ ()=> handleSignOut()}>
                            <Text style={styles.userBtnTxt}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </>
                </View>
                <View style={styles.userInfoSection}>

                    <View style={styles.row}>
                        <Icon name="gender-male" color="#ccc" size={30}/>
                        <Text style={{color: COLORS.lightGray3, marginLeft: 20, fontSize:20}}> {dataUser?.gioitinh} </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#ccc" size={30}/>
                        <Text style={{color: COLORS.lightGray3, marginLeft: 20, fontSize:20}}> {auth.currentUser?.email} </Text>
                    </View>
                </View>

                <View style={styles.userInfoWrapper}>
                    <View style={styles.userInfoItem}>
                        <Text style={styles.userInfoTitle}>{myMangas?.length}</Text>
                        <Text style={styles.userInfoSubTitle}>Số truyện theo dõi</Text>
                    </View>

                </View>


            </ScrollView>
        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: COLORS.lightGray2
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,

    },
    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        backgroundColor: COLORS.darkBlue
    },
    userBtnTxt: {
        color: COLORS.white,
        backgroundColor: COLORS.darkBlue
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: COLORS.lightGray3,

    },
    userInfoSubTitle: {
        fontSize: 18,
        color: COLORS.lightGray3,
        textAlign: 'center',
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10
    },
});


import React, {useEffect, useState} from 'react';

import {Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from "react-native-paper";
import {Picker} from "@react-native-picker/picker";
import {onValue, ref, set, update} from "firebase/database";
import {auth, database} from "../firebase/firebase";
import {COLORS} from "../../constants";


const EditProfile = () => {
    const {colors} = useTheme();
    const [userData, setUserData] = useState();
    const [selectedGender, setselectedGender] = useState("Nam");
    const [dataUser, setDataUser] = React.useState();

    useEffect(() => {

        const starCountRef = ref(database, 'nguoidung/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            setDataUser(snapshot.val());
            console.log(snapshot.val())
        });
    }, []);
    function updateProfile(newName,newgender) {
        update(ref(database,'nguoidung/'+auth.currentUser?.uid),{
            username: newName,
            gioitinh: newgender
        })
            .then(()=>{
                Alert.alert('Cập nhật thành công');
            })
            .catch((error => {
                console.log("loi cap nhat"+ error);
            }))

    }
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {}}>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <ImageBackground
                            source={
                                {uri: 'https://i.imgur.com/mKeQ9LV.jpeg'}
                            }
                            style={{height: 100, width: 100}}
                            imageStyle={{borderRadius: 15}}>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                <Icon
                                    name="camera"
                                    size={35}
                                    color="#fff"
                                    style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                    {dataUser?.username}
                </Text>
            </View>

            <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20}/>
                <TextInput
                    labelValue={userData}
                    onChangeText={(userData) => setUserData(userData)}
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                        styles.textInput,
                        {
                            color: colors.text,
                        },
                    ]}
                />
            </View>

            <View style={styles.action2}>
                <View style={styles.gender}>
                    <FontAwesome name="transgender" color={colors.text} size={20} />
                    <Text style={{paddingLeft: 20, fontSize: 18,color: '#525050',}} >Giới tính</Text>
                </View>
                <Picker
                    selectedValue={selectedGender}
                    onValueChange={(itemValue, itemIndex) =>
                        setselectedGender(itemValue)
                    }>
                    <Picker.Item label="Nam" value="Nam" />
                    <Picker.Item label="Nữ" value="Nữ" />
                </Picker>
            </View>



            <TouchableOpacity style={styles.commandButton} onPress={() => {
                if (selectedGender===undefined || userData===undefined){
                    Alert.alert(
                        "Lỗi",
                        "Bạn chưa nhập đầy đủ?",
                        [

                            { text: "Ok", onPress: () => {

                                    // const index = myManga.findIndex(result => result.title === props.item.title);


                                } }
                        ]
                    );
                }
                else{
                    updateProfile(userData,selectedGender);
                }

            }}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
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
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',

    },
    action: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#a79595',
        paddingBottom: 5,
        paddingLeft: 10,
    },
    action2: {
        marginTop: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#a79595',
        paddingBottom: 5,
        paddingLeft: 10,
        float: 'left',
    },
    gender: {
        flexDirection: 'row',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 20,
        color: '#05375a',
        fontSize: 18,
    },
});

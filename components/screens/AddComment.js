import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import {COLORS} from "../../constants";
import {onValue, ref, set} from "firebase/database";
import {auth, database} from "../firebase/firebase";
const AddComment = ({truyenID,idComment}) => {
    const [comment, setComment] = React.useState();

    const [dataUser, setDataUser] = React.useState();
    useEffect(() => {

        const starCountRef = ref(database, 'nguoidung/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            setDataUser(snapshot.val());

        });
    }, []);



    function CreateUserComment(userid,content,tentaikhoan) {

        set(ref(database, 'truyen/'+truyenID +"/" + "comment" + "/"+idComment),
            {
                id: userid,
                noidung: content,
                tenuser:tentaikhoan
            }
        ).then(r =>console.log('them comment thanh cong')) ;
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={'Nhập bình luận'}
                value={comment}
                onChangeText={setComment}
                placeholderTextColor={COLORS.white}
            />
            <TouchableOpacity
                style={styles.sendButton}
                disabled={!comment}
                onPress={ () => {

                    CreateUserComment(auth.currentUser?.uid,comment,dataUser.username);
                    setComment('');
                }}>
                <Feather
                    name="send"
                    color="#05375a"
                    size={20}
                />
            </TouchableOpacity>
        </View>
    );
};

export default AddComment;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 8,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        padding: 16,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        color: COLORS.white
    },
    sendButton: {
        backgroundColor: COLORS.lightBlue,
        width: 60,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

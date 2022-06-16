import React, {useEffect, useState} from 'react'
import {ImageBackground, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native'
import {vh, vw} from "react-native-viewport-units";
import {COLORS, icons} from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import {onValue, ref, remove} from "firebase/database";
import {auth, database} from "../firebase/firebase";
import FontAwesome from "react-native-vector-icons/FontAwesome";



export default function RenderManga(props) {
    const [myManga, setMyManga] = useState([]);
    useEffect(() => {

        const starCountRef = ref(database, 'bookmark/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setMyManga(snapshot.val());
        });
    }, []);
   /* const index = myManga.findIndex(result => result.title === myManga.title) ;*/

    function deleteBookMark(mangaId,numbermanga) {

        remove(ref(database, '/bookmark/'+mangaId+"/"+numbermanga)
        ).then(r =>console.log('xóa bookmark thành công')) ;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate("MangasDetail", {
            mangas: props.item
        })}>
            <ImageBackground style={styles.image} resizeMode="cover" imageStyle={{ borderRadius: 8}} source={{ uri:'http://'+props.item.image }}      >
                <Text style={styles.text}>{props.item.title}</Text>
            </ImageBackground>
            <TouchableOpacity
                style={{ position: 'absolute', top: 5, right: 15, }}
                onPress={() => {
                    Alert.alert(
                        "Xóa bookmark",
                        "Bạn có muốn xóa?",
                        [
                            {
                                text: "Hủy",
                                onPress: () => {
                                    console.log("Cancel Pressed");

                                },
                                style: "cancel"
                            },
                            { text: "Xóa", onPress: () => {
                                console.log("Xóa bookmark nè");
                                    // const index = myManga.findIndex(result => result.title === props.item.title);
                                    const index = myManga.map(result => result.title===props.item.title).findIndex((props)=>props);
                                deleteBookMark(auth.currentUser?.uid,index);

                            } }
                        ]
                    );

                }}
            >
                <FontAwesome name="trash" color={COLORS.darkBlue} size={30}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: vw(42),
        height: vh(40),
        margin: 8
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",

    },
    text: {
        color: "white",
        flexWrap: "nowrap",
        flex: 1,
        fontSize: 12,
        lineHeight: 32,
        maxHeight: 32,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: "center"
    }
});

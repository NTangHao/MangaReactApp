import {FlatList, Text, TouchableOpacity,StyleSheet, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React, { useEffect, useState } from 'react'
import READING_CHAPTER from "../../apis/get_chapter_content";
import ImageChapter from "./ImageChapter";
import {vw} from "react-native-viewport-units";
import { getStorage, ref, getDownloadURL,listAll  } from 'firebase/storage';
import {storage} from "../firebase/firebase";
import {COLORS} from "../../constants"; //access the storage database


const Nav = (props) => {
    const current = props.current;
    const list = props.list;
    return (
        <View style={styles.container}>
            {
                current < list.length-1 && (
                    <TouchableOpacity style={styles.navbtn} onPress={() => props.navigation.replace('reading_chapter', {
                        url: list[current+1].link,
                        navigation: props.navigation,
                        list: props.list,
                        current: props.current+1
                    })}>
                        <Text style={styles.text}>
                            Chap trước
                        </Text>
                    </TouchableOpacity>
                )
            }
            <Picker
                style={{ width: 175, height: 40, margin: 4, }}
                selectedValue={current}
                mode="dialog"
                onValueChange={
                    index => props.navigation.replace('reading_chapter', {
                        url: list[index].link,
                        navigation: props.navigation,
                        list: props.list,
                        current: index
                    })
                }
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:30, }}>
                {list.map((item, index) => {
                    return (< Picker.Item label={item.name} value={index} key={index} />);
                })}
            </Picker>
            {
                current > 0 && (
                    <TouchableOpacity style={styles.navbtn}
                                      onPress={() => props.navigation.replace('reading_chapter', {
                                          url: list[current-1].link,
                                          navigation: props.navigation,
                                          list: props.list,
                                          current: props.current-1
                                      })}>
                        <Text style={styles.text}>
                            Chap sau
                        </Text>
                    </TouchableOpacity>
                )
            }


        </View>
    )
}

export default function ReadChapter({route}) {
    const [data, setData] = useState([]);
    const { url, navigation, list, current } = route.params;
    /*useEffect(() => {
        READING_CHAPTER(url).then(res => setData(res));
    }, []);*/
    useEffect(() => {
        let abortController = new AbortController();
        const listRef = ref(storage, url);

        listAll(listRef).then((res) => {
            let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
            Promise.all(promises).then((urls) => {
                setData(urls)
            })
        }).catch((err)=> {
            console.log(err)
        });
        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => <ImageChapter url={item} /> }
                keyExtractor={(e, i) => i.toString()}
                initialNumToRender={5}
                // stickyHeaderIndices={[0]}
                ListHeaderComponent={() => <Nav navigation={navigation} list={list} current={current} />}
                ListFooterComponent={() => <Nav navigation={navigation} list={list} current={current} />}
            >
            </FlatList>
        </>
    )
}

const styles = StyleSheet.create({

    navbtn: {
        padding: 4,
        height: 40,
        alignItems:'center',
        backgroundColor: COLORS.darkBlue,
        justifyContent:'center',
        margin: 4,
        borderRadius: 8,
        width: vw(20)
    },
    text: {
        color:'#fff'
    },
    container: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 8
    }
});

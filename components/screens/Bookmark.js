import React, {useEffect, useState} from 'react';

import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import Data, {bookmarkData} from "../../Data";
import {COLORS, FONTS} from "../../constants";
import {getDatabase, ref, child, get, onValue, set,remove} from "firebase/database";
import RenderManga from "../MangaComponent/RenderManga";
import {auth, database} from "../firebase/firebase";

const Bookmark = ({ route, navigation }) => {
    const [myMangas, setMyMangas] = useState([]);
    useEffect(() => {

        const starCountRef = ref(database, 'bookmark/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setMyMangas(snapshot.val());
        });
    }, []);


    return (
        <View  style={{flex: 1, backgroundColor: COLORS.black}}>
            <View>
                <Text style={{ ...FONTS.h2, color: '#FFFFFF' }}>Bookmark</Text>
            </View>
            <FlatList
                data={myMangas}
                renderItem={({item}) =>
                    <RenderManga item={item}
                          navigation={navigation}
                    />
                }
                numColumns={2}
                keyExtractor={(e,i) => i.toString()}


                ListFooterComponent={<View style={{ height: 100, flex: 1, alignItems: 'center' }}></View>}

            >
            </FlatList>
        </View>
    );
}

export default Bookmark;
const styles = StyleSheet.create({});

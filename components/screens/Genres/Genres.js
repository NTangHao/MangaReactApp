import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import LIST_GENRES from "../../../apis/get_list_genres";
import ReadChapter from "../../MangaComponent/ReadChapter";
import MangasDetail from "../MangasDetail";
import ListByGenres from "./ListByGenres";
import {COLORS} from "../../../constants";
import ReadChapter1 from "../../MangaComponent/ReadChapter1";


const seperate = () => {
    return (
        <View style={{
            width: '100%',
            height: 0.5,
            marginRight: 8,
            marginLeft: 8,
            backgroundColor: COLORS.white,
        }}>

        </View>
    );
}

const Stack = createNativeStackNavigator();

const ListGenres = ({ navigation }) => {

    const [genres, setgenres] = useState([]);
    useEffect(() => {
        LIST_GENRES().then((res) => setgenres(res));
    },[]);
    return (
        <View >
            <FlatList
                data={genres}
                renderItem={({item, index}) => (
                    <View>
                        <TouchableOpacity style={styles.genres} onPress={()=> navigation.navigate('list_by_genres', { url: item.url+'?status=-1', name: item.name })}>
                            <Text style={{color: "#fff"}}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(e, i) => i.toString()}
                ListFooterComponent={<View style={{ height: 20 }}></View>}
                ItemSeparatorComponent={seperate}
            />
        </View>
    );
}

export default function Genres() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="list_genres" component={ListGenres} options={{ title:'Danh sách thể loại',  headerStyle: { backgroundColor: COLORS.darkBlue}, headerTitleStyle: { color: 'white' } }} />
            <Stack.Screen name="list_by_genres" component={ListByGenres} options={({route})=> ({ title:route.params.name, headerStyle: { backgroundColor: COLORS.darkBlue}, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }) } />
            <Stack.Screen name="detail_manga" component={MangasDetail} options={{
                headerShown: false
            }} />
            <Stack.Screen name="reading_chapter" component={ReadChapter1} options={({route})=> ({ title:route.params.list[route.params.current].chapter_name })} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    genres: {
        padding: 4,
        height: 40,
        alignItems:'center',
        backgroundColor: COLORS.black,
        justifyContent:'center',
    }
});

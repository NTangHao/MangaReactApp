import React, {useEffect, useState} from 'react';

import {FlatList, Image, LogBox, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {auth, database} from "../firebase/firebase";
import {getDatabase, ref, child, get, onValue, query, set} from "firebase/database";
import MangaDetail from "../MangaInfo/MangaDetail";
import Data, {Data2} from "../../Data";
import {COLORS, FONTS, icons, SIZES} from "../../constants";
import {advanceAnimationByFrame} from "react-native-reanimated/lib/types/lib/reanimated2/jestUtils";
import LATEST_UPDATE from "../../apis/latest_update_list";


const Home = ({navigation}) => {
    const [myMangas, setMyMangas] = React.useState([]);
    const [tenUser, setTenUser] = React.useState();
    useEffect(() => {

        const starCountRef = ref(database, 'truyen/');
        onValue(starCountRef, (snapshot) => {
            setMyMangas(snapshot.val());

        });
    }, []);

    useEffect(() => {

        const starCountRef = ref(database, 'nguoidung/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            setTenUser(snapshot.val());
            console.log(snapshot.val())
        });
    }, []);


    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
                    /*PHÂN LOẠI MANGA*/
    const REGEX_UNWANTED_CHARACTERS = /[^\d\-.,]/g;
    const REGEX_DASHES_EXEPT_BEGINING = /(?!^)-/g;
    const REGEX_PERIODS_EXEPT_LAST = /\.(?=.*\.)/g;
    function formatNumber(number) {
        if ((number.match(/e/g) ?? []).length === 1) {
            const numberParts = number.split('e')
            return `${formatNumber(numberParts[0])}e${formatNumber(numberParts[1])}`
        }

        const sanitizedNumber = number
            .replace(REGEX_UNWANTED_CHARACTERS, '')
            .replace(REGEX_DASHES_EXEPT_BEGINING, '')

        if (
            ((sanitizedNumber.match(/,/g) ?? []).length >= 2 && !sanitizedNumber.includes('.')) ||
            ((sanitizedNumber.match(/\./g) ?? []).length >= 2 && !sanitizedNumber.includes(','))
        ) {
            return sanitizedNumber.replace(/[.,]/g, '')
        }

        return sanitizedNumber.replace(/,/g, '.').replace(REGEX_PERIODS_EXEPT_LAST, '')
    }
    const mangahot = myMangas.filter((item)=>{
        return item.message_main.comment !=="Đang tiến hành"
    }).sort((a, b) => formatNumber(b.message_main.comment) - formatNumber(a.message_main.comment)).slice(0,8);

    const mangafull = myMangas.filter((item)=>{
        return item.detail.status ==='Hoàn thành'
    }).slice(0,5);

    const mangamoi = myMangas
        .sort((a, b) => formatNumber(a.message_main.update_time) - formatNumber(b.message_main.update_time))
        .slice(0,5);



    const categoriesData = [
        {
            id: 0,
            categoryName: "Hot Nhất",
            mangas: mangahot
        },
        {
            id: 1,
            categoryName: "Mới Nhất",
            mangas: mangamoi
        },
        {
            id: 2,
            categoryName: "Đã Full",
            mangas: mangafull
        },
    ]

    /*PHÂN LOẠI MANGA*/
    const categoryList = ['Hot Nhất', 'Mới Nhất', 'Đã Full'];
    const profileData = {
        name: 'NearHao',
    }


    const [profile, setProfile] = React.useState(profileData);
    //const [myMangas, setMyMangas] = React.useState(Data);
    const [currentPage, setCurrentPage] = useState(1);
/*    const getNew = () => {
        setCurrentPage(currentPage+1);
        LATEST_UPDATE().then(res => setMyMangas([...myMangas, ...res]));
    }
    useEffect(() => {
        getNew();
    }, []);*/


    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const renderHeader = (profile) => {
        return  (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: 24 }}>
                        <Text style={{ ...FONTS.h3, color: '#FFFFFF' }}>Xin chào</Text>
                        <Text style={{ ...FONTS.h2, color: '#FFFFFF' }}>{tenUser?.username}</Text>
                    </View>
                </View>
            </View>
        );
    }

    const renderMyMangaSection = (myMangas) => {
        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index === 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("MangasDetail", {
                        mangas: item
                    })}
                >
                    {/* Manga Cover */}
                    <Image
                        source={{uri:'http://'+item.image}}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Manga Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, width:160,textAlign:'center',height: 50 }}>{item.title}</Text>


                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Đề Xuất</Text>


                </View>

                {/* Mangas */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myMangas}
                        renderItem={renderItem}

                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }


    const ListCategories = () => {

        return (
            <View style={styles.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategory(index)}>
                        <Text
                            style={[
                                styles.categoryListText,
                                index === selectedCategory && styles.activeCategoryListText,
                            ]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };



    function renderCategoryData() {
        let mangas = [];

        let selectedCategoryMangas = categoriesData.filter(a => a.id === selectedCategory)

        if (selectedCategoryMangas.length > 0) {
            mangas = selectedCategoryMangas[0].mangas
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("MangasDetail", {
                            mangas: item
                        })}
                    >
                        {/* Manga Cover */}
                        <Image
                            source={{uri:'http://'+item.image}}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Manga name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.title}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.detail.author}</Text>
                            </View>

                            {/* Manga Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.message_main.comment}</Text>
                            </View>



                        </View>
                    </TouchableOpacity>



                </View>
            )
        }
        const loadmore = () => {
            return(
                <View style={{ height: 100, flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'center', textDecorationLine: 'underline', marginTop:20 }}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={mangas}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                    initialNumToRender={5}
                    horizontal={false}
                    ListFooterComponent={<View style={{ height: 100, flex: 1, alignItems: 'center' }}></View>}
                    onEndReached={() => loadmore()}
                    onEndReachedThreshold={0.7}
                />

            </View>
        )
    }


    return (
        <View style={{flex: 1, backgroundColor: COLORS.black}}>
            <View style={{ height: 70 }}>
                {renderHeader(profile)}
            </View>
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Mangas Section */}
                <View>
                    {renderMyMangaSection(myMangas)}
                </View>

                {/* Categories Section */}
              <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        <ListCategories/>
                        {/*{renderCategoryHeader()}*/}
                    </View>
                  <View>
                      {renderCategoryData()}
                  </View>
              </View>
            </ScrollView>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    categoryListContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        paddingHorizontal: 20,
    },
    categoryListText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 0,
        color: COLORS.lightGray,
    },
    activeCategoryListText: {
        color: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
})



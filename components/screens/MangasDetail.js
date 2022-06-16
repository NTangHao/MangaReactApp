import React, {useEffect, useState} from 'react';
import Data, {categoriesData, Data2} from "../../Data";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Animated, Button, FlatList, Dimensions
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from "../../constants";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import DETAIL_MANGA from "../../apis/get_detail_manga";
import {vw} from "react-native-viewport-units";
import Loading from "../MangaComponent/Loading";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Chapter from "../MangaComponent/Chapter";
import Chapter1 from "./Genres/Chapter1";
const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}>

            </View>
        </View>
    )
}


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const seperate = () => {
    return (
        <View style={{
            width: '100%',
            height: 0.5,
            marginRight: 8,
            marginLeft: 8,
            backgroundColor: '#ccc',
        }}>

        </View>
    );
}

const MangasDetail = ({ route, navigation }) => {

    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);
    const { mangas } = route.params;
    const [data, setData] = useState(false);
    useEffect(() => {
        DETAIL_MANGA(route.params.url).then(res => {
            setData(res);

        });
    }, []);


    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={{uri:data.thumbnail}}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,

                        height: 247
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: 247,
                        backgroundColor: "rgba(119,77,143,0.9)",
                    }}
                >
                </View>
                {/* Navigation header */}
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>

                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: '#FFFFFF'
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>

                    <TouchableOpacity
                        style={{ marginRight: SIZES.base }}
                        onPress={() => console.log("Click More")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor:'#FFF',
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Image Cover */}
                <View style={{ flex: 5, paddingTop:0, alignItems: 'center' }}>
                    <Image
                        source={{uri:data.thumbnail}}
                        resizeMode="contain"
                        style={{

                            flex: 1,
                            width: 150,
                            height: 150,

                        }}
                    />
                </View>
                {/* Book Name and Author */}
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: '#FFF', marginTop: 25 }}>{data.title}</Text>
                    <Text style={{ ...FONTS.body3, color: '#FFF' }}>{data.author}</Text>
                </View>
                <FlatList
                    data={data.genres}
                    horizontal
                    style={{ maxWidth: vw(100) }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.genres}>
                                <Text style={styles.genres_text}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.toString()}
                />
                {/* Book Info */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)",

                    }}
                >
                    {/* Chapter */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>12</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Số chương</Text>
                    </View>

                    <LineDivider />

                    {/* Status */}
                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{data.status}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Tình trạng</Text>
                    </View>

                    <LineDivider />

                    {/* View */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Lượt xem</Text>
                    </View>
                </View>

            </View>

        );
    }

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
                {/* Custom Scrollbar */}
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}
                    />
                </View>

                {/* Description */}
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Mô tả</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{data.summary}</Text>
                </ScrollView>
            </View>
        )
    }

    return (

        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
           {/*  Book Cover Section
            <View style={{ flex: 4 }}>
                {renderBookInfoSection()}
            </View>


             Description
            <View style={{ flex: 2 }}>
                {renderBookDescription()}
            </View>


             Buttons */}
            {/* Navigation header */}
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 40, alignItems: 'flex-end' }}>

                <TouchableOpacity
                    style={{ marginLeft: SIZES.base }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: '#FFFFFF'
                        }}
                    />
                </TouchableOpacity>

            </View>
            {
                data && (
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.detail_image}>
                            <Image style={styles.image_thumbnail}
                                   source={{ uri: data.thumbnail }}
                            />
                        </View>
                        <View style={styles.detail_info}>

                            <Text style={styles.title}>{ data.title }</Text>
                            <FlatList
                                data={data.genres}
                                horizontal
                                style={{ maxWidth: vw(100) }}
                                renderItem={({item}) => {
                                    return (
                                        <TouchableOpacity style={styles.genres}>
                                            <Text style={styles.genres_text}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                }}
                                keyExtractor={(item) => item.toString()}
                            />
                            <Text style={styles.text}><MaterialCommunityIcons name="pencil" size={25} /> Tác giả: { data.author }</Text>
                            <Text style={styles.text}><MaterialCommunityIcons name="rss" size={25} /> Tình trạng: { data.status }</Text>
                            <Text style={styles.text}><MaterialCommunityIcons name="calendar-text" size={25} /> Giới thiệu:</Text>
                            <Text style={styles.text}>{ data.summary }</Text>
                            <FlatList
                                data={data.chapter_list}
                                keyExtractor={(item, index) => index.toString()}
                                nestedScrollEnabled
                                style={styles.list_chapter}
                                renderItem={({item, index}) =>
                                    <Chapter1
                                        item={item}
                                        current={index}
                                        list={data.chapter_list}
                                        navigation={navigation}
                                    />
                                }
                                ItemSeparatorComponent={seperate}
                            >
                            </FlatList>
                            <TouchableOpacity style={styles.genres} onPress={() => console.log("bookmark")}>
                                <Text style={styles.genres_text}>
                                   Thêm vào Bookmark
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )
            }
            {
                !data && (
                    <View style={styles.loading}>
                        <Loading />
                    </View>
                )
            }


        </View>
    );
};

export default MangasDetail;
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 0,
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: COLORS.black
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center'
    }
    ,
    detail_image: {
        padding: 8,
        height: screenHeight/2.5,
        backgroundColor: COLORS.black,
        margin: 4,
        alignItems: 'center',
        display: 'flex'
    },
    image_thumbnail: {
        width: '50%',
        backgroundColor: '#fff',
        height: '100%',

        borderRadius: 8,
        resizeMode: 'cover',
    },
    detail_info: {
        minHeight: 250,
        padding: 8,
        margin: 8,
        marginTop: 0,
        paddingTop: 0
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.lightGray2,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',

    },
    genres: {
        borderWidth: 1,
        padding: SIZES.base,
        marginRight: SIZES.base,
        backgroundColor: COLORS.darkGreen,
        height: 40,
        borderRadius: SIZES.radius,
        marginBottom: 5,
        marginTop: 5,
    },
    genres_text: {
        color:COLORS.lightGreen,
        textAlign: 'center'
    },
    size_vector: {
        width: 10,
        height: 10
    },
    text: {
        paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.lightGray
    },
    list_chapter: {
        height: 200,
        borderColor: COLORS.lightGray2,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 12,
    },
    navbtn: {
        height: 100,
        width: 200
    }
});


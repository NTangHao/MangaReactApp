import React, {useEffect, useRef, useState} from 'react';
import Data, {categoriesData, Data2} from "../../Data";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Animated, Button, FlatList, Dimensions, Alert
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from "../../constants";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import DETAIL_MANGA from "../../apis/get_detail_manga";
import {vw} from "react-native-viewport-units";
import Loading from "../MangaComponent/Loading";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Chapter from "../MangaComponent/Chapter";
import {child, getDatabase, onValue, ref, set, get, remove} from "firebase/database";
import {auth, database} from "../firebase/firebase";
import AddComment from "./AddComment";
import {Card} from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";


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


    const [liked, setLiked] = useState(false);
    const [position, setPosition] = useState();
    const { mangas } = route.params;
    const [data, setData] = useState([]);
    const [dataComment, setDataComment] = useState([]);
    let arrayComment = [];
    useEffect(() => {

        const starCountRef = ref(database, 'truyen/');
        onValue(starCountRef, (snapshot) => {
            setData(snapshot.val());

        });


    }, []);

    const index = data.findIndex(result => result.title === mangas.title) ;
    /*useEffect(() => {
        DETAIL_MANGA(route.params.url).then(res => {
            setData(res);

        });
    }, []);*/

    const [myMangas, setMyMangas] = useState([]);
    useEffect(() => {

        const starCountRef = ref(database, 'bookmark/'+auth.currentUser?.uid+"/");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setMyMangas(snapshot.val());
        });
    }, []);

    //Check duplicate manga bookmark
    const hasDupManga = function(array) {

        return array.map(function(value) {
            return value.description;

        }).some(function(value, index, array) {
            return array.indexOf(value) !== array.lastIndexOf(value);
        })
    }
    /*Thêm dữ liệu vào bookmarkt*/
    function writeBookmarkData(mangaId, mangaBookmark,numbermanga) {

        set(ref(database, '/bookmark/'+mangaId+"/"+numbermanga),
            mangaBookmark
        ).then(r =>console.log('them bookmark thanh cong')) ;
    }


    /*Lấy độ dài mảng comment*/
  function layIdComment() {
        //console.log(index);
        const starCountRef = ref(database, '/truyen/'+index +"/" + "comment" );
        onValue(starCountRef, (snapshot) => {

            setDataComment(snapshot.val());
            arrayComment= snapshot.val();
        });
   console.log(arrayComment);

    return arrayComment && arrayComment.length ?arrayComment.length :0;
    }

    function deleteComment(numberComment) {

        remove(ref(database, '/truyen/'+index+"/"+"comment/"+numberComment)
        ).then(r =>console.log('xóa comment thành công')) ;
    }

    function renderComment({item: comment}) {
      let buttonDelete;
      if (comment?.id===auth.currentUser?.uid)
      {
          buttonDelete = <TouchableOpacity
              style={{ position: 'absolute', top: 10, right: 0, backgroundColor:COLORS.lightRed}}
              onPress={() => {
                  Alert.alert(
                      "Xóa bình luận",
                      "Bạn có muốn xóa bình luận này?",
                      [
                          {
                              text: "Hủy",
                              onPress: () => {
                                  console.log("Cancel Pressed");

                              },
                              style: "cancel"
                          },
                          { text: "Xóa", onPress: () => {
                                  console.log("Xóa comment nè");
                                   /*const number = dataComment.findIndex(result => result.noidung === comment.noidung);*/
                                  const number = dataComment.map(result => result.noidung===comment?.noidung).findIndex((props)=>props);
                                  deleteComment(number);

                              } }
                      ]
                  );

              }}
          >
              <Feather
                  name="trash-2"
                  color="#05375a"
                  size={20}

              />
          </TouchableOpacity> ;
      }
        return (
            <View>
                <Text style={styles.usernameFont}>{comment?.tenuser}</Text>
                {buttonDelete}

                <Card id={comment?.id} style={styles.commentCard}>
                    <Text style={{fontSize:15}}>{comment?.noidung}</Text>

                </Card>
            </View>
        );
    }

    return (

        <View style={{ flex: 1, backgroundColor: COLORS.black }}>

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
                mangas && (
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.detail_image}>
                            <Image style={styles.image_thumbnail}
                                   source={{ uri:'http://'+mangas.image }}
                            />
                        </View>
                        <View style={styles.detail_info}>

                            <Text style={styles.title}>{ mangas.title }</Text>
                            <FlatList
                                data={mangas.detail.genres}
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
                            <Text style={styles.text}><MaterialCommunityIcons name="pencil" size={25} /> Tác giả: { mangas.detail.author }</Text>
                            <Text style={styles.text}><MaterialCommunityIcons name="rss" size={25} /> Tình trạng: { mangas.detail.status }</Text>
                            <Text style={styles.text}><MaterialCommunityIcons name="calendar-text" size={25} /> Giới thiệu:</Text>
                            <Text style={styles.text}>{ mangas.description }</Text>
                            <FlatList
                                data={mangas.detail.episodes}
                                keyExtractor={(item, index) => index.toString()}
                                nestedScrollEnabled
                                style={styles.list_chapter}
                                renderItem={({item, index}) =>
                                    <Chapter
                                        item={item}
                                        current={index}
                                        list={mangas.detail.episodes}
                                        navigation={navigation}
                                    />
                                }
                                ItemSeparatorComponent={seperate}
                            >
                            </FlatList>
                            <TouchableOpacity style={styles.genres} onPress={() => {
                                if (myMangas && myMangas.length)
                                {
                                    writeBookmarkData(auth.currentUser?.uid,mangas,myMangas.length);

                                }
                                else
                                {
                                    writeBookmarkData(auth.currentUser?.uid,mangas,'0');

                                }

                                setLiked((isLiked) => !isLiked)
                            }}>
                                <Text style={styles.genres_text}>
                                    {liked ? "Đã thêm bookmark" : "Thêm vào bookmark"}
                                </Text>
                            </TouchableOpacity>
                            <AddComment truyenID={index} idComment={dataComment && dataComment.length ?dataComment.length :0}  />
                            <TouchableOpacity style={styles.btnComment} onPress={() => {
                                layIdComment();
                                console.log(layIdComment());

                            }}>
                                <Text style={styles.FontComment}>Hiển thị bình luận</Text>
                                {/*Number of comment */}

                            </TouchableOpacity>
                            <Text style={styles.title}>
                                {dataComment && dataComment.length > 0
                                    ? `Bình luận [${dataComment.length}]`
                                    : 'Bình luận [0]'}
                            </Text>
                            <FlatList
                                data={dataComment ? dataComment : []}
                                renderItem={renderComment}
                                contentContainerStyle={styles.commentsContainer}
                                keyExtractor={(e,i) => i.toString()}
                            />
                        </View>

                    </ScrollView>
                )
            }
            {
                !mangas && (
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

    commentsContainer: {
        padding: 8,
    },
    commentCard: {
        padding: 16,
        marginVertical: 8,
    },

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
    },
    FontComment:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 15,
        textAlign: 'left',
        color: COLORS.lightGray2,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    btnComment: {
        textAlign: 'center',
        width: 140,
        backgroundColor: COLORS.lightRed,
        borderRadius: SIZES.radius,
        padding: 6,

    },
    usernameFont:{
        color: COLORS.lightBlue,
        fontSize: 15,
        margin: 5,
        fontWeight: "bold"

    }

});



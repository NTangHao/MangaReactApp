import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from "./components/navigation/Tabs";
import AuthStack from "./components/navigation/AuthStack";
import MainStack from "./components/navigation/MainStack";
import Routes from "./components/navigation/Routes";
import Home from "./components/screens/Home";
import MangasDetail from "./components/screens/MangasDetail";
import LIST_GENRES from "./apis/get_list_genres";
import READING_CHAPTER from "./apis/get_chapter_content";
import ImageChapter from "./components/MangaComponent/ImageChapter";
import Genres from "./components/screens/Genres/Genres";

import { getDatabase, ref, set } from "firebase/database";
import {database} from "./components/firebase/firebase";
import Profile from "./components/screens/Profile";
import AddComment from "./components/screens/AddComment";
const App = () => {

   return (
       /*<NavigationContainer>
           <Genres/>
       </NavigationContainer>*/
        // <Home/>
        //<MangasDetail/>
        /*<Profile/>*/

       /*<NavigationContainer>
            <MainStack/>
        </NavigationContainer>*/

         <Routes/>
      /* <AddComment/>*/
// <Search/>

       /*<View>
          <Text>them vao </Text>
           <Button
               onPress={() => {
                   writeUserData('7','hao','haohan','link123');
               }}
               //..
            title={"thêm vào"}/>
       </View>*/
    );

};

export default App;
const styles = StyleSheet.create({

})


import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

class MangaDetail extends React.Component{
    render() {
        const {title,image,description,detail}= this.props.info
       return (
           <View style={styles.container}>
               <Image style={{width:100, height: 150}} source={{uri:'http://'+image}}/>
               <Text style={styles.textstyle}>{title}</Text>
               <Text style={styles.textstyle}>{detail.author}</Text>

           </View>
       );
    }
}

export default MangaDetail;
const styles = StyleSheet.create({
    container:{
        width: '48%',
        alignItems: 'center',
        borderWidth: 0.75,
        margin: '1%',
        padding : 15
    },
    textstyle:{
        textAlign: 'center',
        marginTop: 15
    }
})

import React from 'react';
import {Dimensions, FlatList , Image ,StyleSheet,Text,View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MessageListData from '../json/messageList';

const screenWidth = Math.round(Dimensions.get('window').width);

const RenderItem =({name, id , activeMessage,avatarUrl}) =>{
    return(
        <View style={StyleSheet.singleChatContainer} key={id}>
            <View style={StyleSheet.leftElementContainer}>
                <Image source={{uri:avatarUrl}} style={{height: 45,width:45}}/>
                <View style={StyleSheet.nameContainer}>
                    <Text>{name}</Text>
                    <Text style={StyleSheet.activity}>{activeMessage}</Text>
                </View>
            </View>
            <Feather name="camera" size={28} color={'grey'}/>
        </View>
    )
};

function MessageListScreen({route,navigation}) {
    return(
        <View style={StyleSheet.container}>
            <FlatList
                
            />
        
        </View>
    )
}
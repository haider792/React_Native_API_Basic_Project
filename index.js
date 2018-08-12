import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
        return(
        <View style={{flex:1}}>
        <Header headertext = 'welcome to the react native'></Header>
        <AlbumList></AlbumList>
        </View>
        );
};

AppRegistry.registerComponent('hurrah',() => App);
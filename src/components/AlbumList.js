import React , {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import axios from 'axios';
import Card from './card';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component{
    state = {albums:[]};

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(respose => this.setState({albums: respose.data}));
  
    }

    renderAlbums(){
        return this.state.albums.map(a => <AlbumDetail key={a.title} album={a}></AlbumDetail>);
    }

render(){
    
    return(
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
}
}

export default AlbumList;
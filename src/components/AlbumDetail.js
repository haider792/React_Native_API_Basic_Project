import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './Buttton';
const AlbumDetail = (props) =>{
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                    style={styles.thumbnailImageStyle} 
                    source={{uri:props.album.thumbnail_image}}
                    ></Image>
                </View>
                <View style={styles.HeaderContentStyle}>
                    <Text>{props.album.artist}</Text>
                    <Text>{props.album.title}</Text>
                </View>   
            </CardSection>
            <CardSection>
            <Image
                    style={styles.image}
                   source={{uri:props.album.image}}
            ></Image>
            </CardSection>
            <CardSection>
                <Button onPress={() => console.log('hello')} text='Store'>
                </Button>
            </CardSection>
        </Card>



    );
};

const styles = {
    HeaderContentStyle:{
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    thumbnailImageStyle:{
        height:40,
        width:40
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItem:'Center',
        marginLeft:10,
        marginRight:10 
    },
    image:{
        height:400,
        flex:1,
        width:null
    }
}
export default AlbumDetail;
import React from 'react';
import {Text, View} from 'react-native';

 const Header = (props) => {
    const {textStyle , viewStyle} = styles; 
    return (
    <View style={viewStyle}>
    <Text style = {textStyle}> {props.headertext} </Text>
    </View>
    );
   

};

const styles={
    viewStyle: {
        backgroundColor: 'silver',
        justifyContent : 'center',
        alignItems : 'center',
        height: 60,
        position: 'relative'
        // shadowColor: 'black',
        // shadowOffset:{width:0, height:10},
        // shadowOpacity:0.4
    },
    textStyle: {
        fontSize: 20
    }
};
 
export default Header;
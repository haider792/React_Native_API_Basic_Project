import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {ButtonStyle , TextStyle} = styles;
    return(
        <TouchableOpacity onPress={props.onPress} style={ButtonStyle}>
            <Text style={TextStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    ButtonStyle:{
        marginTop:5,
        marginLeft:10,
        marginRIght:10,
        borderColor:'blue',
        borderWidth:1,
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#ddd',
        borderRadius:5,
    },
    TextStyle:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'50',
        color:'blue',
        paddingTop:5,
        paddingBottom:5
    }
}

export default Button;
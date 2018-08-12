import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    console.log('haider');
    return(
        <View style={styles.CardSectionStyle}>
          {props.children}
        </View>
    );
};

const styles={
    CardSectionStyle : {
        borderBottomWidth : 1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent: 'flex-start',
        flexDirection : 'row',
        borderColor:'#ddd',
        postion:'relative'
    }
};

export default CardSection;
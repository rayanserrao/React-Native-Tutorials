import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const displayname = () =>{
    const name1 = 'Rayan'
    return <View>
        <Text style={style.textstyle}>Getting started with React Native!</Text>
        <Text style={style.textstyle1}>My name is {name1}</Text>
    </View>
};

const style = StyleSheet.create({
    textstyle:{
        fontSize:45
    },
    textstyle1:{
        fontSize:20
    }

});

export default displayname;
   
    

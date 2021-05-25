import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const componentsscreen = () =>{
    const greeting = "hello ppl how are you?";
    const hel= <Text style={{fontSize:30,fontWeight:'bold'}}>React Native</Text>
    return <View>
    <Text style={stylo.textstyle}>This is the componnet screen</Text>
    <Text style={{fontSize:40, fontWeight:'bold'}}>Hello all</Text>
    <Text style={{fontSize:30, fontStyle:'italic'}}>{greeting}</Text>
    {hel}
    </View>

};

const stylo = StyleSheet.create({
    textstyle:{
        fontWeight:'bold',
        fontSize:20
        
        
     }
});



export default componentsscreen;
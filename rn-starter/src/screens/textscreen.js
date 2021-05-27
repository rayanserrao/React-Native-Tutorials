import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const textScreen = ()=>{
    const [name, setname] = useState('');
    return(
        <View>
        <Text>Enter Name:</Text>
     <TextInput
    autoCapitalize = 'none'
    autoCorrect = {false}
    value={name}
    onChangeText={(newvalue) => setname(newvalue)}
    style = {styles.input}/>
    <Text> My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin:20,
        borderWidth:1,
        borderColor:'black'
    }

});

export default textScreen;
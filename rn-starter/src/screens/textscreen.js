import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const textScreen = ()=>{
    const [name, setname] = useState('');
    return(
        <View>
        <Text>Enter Password</Text>
     <TextInput
    autoCapitalize = 'none'
    autoCorrect = {false}
    value={name}
    onChangeText={(newvalue) => setname(newvalue)}
    style = {styles.input}/>
    <Text> {name.length>=5? 'password is strong':null}</Text>
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
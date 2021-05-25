import React from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';



const Friendlist = () =>{
    const Friends = [
        {name:'Friend1', age:45},
        {name:'Friend2', age:38},
        {name:'Friend3', age:27},
        {name:'Friend4', age:56},
        {name:'Friend5', age:48},
        {name:'Friend6', age:43},
        {name:'Friend7', age:21},
    ];

    return (
        <View style={{flex:2, backgroundColor:'skyblue'}}>
    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={(friend) =>friend.name}
    data={Friends}
    renderItem={({item}) => {
        return <Text style={style.textstyle}>{item.name} - Age {item.age}</Text>
    }
 } />
 </View>

    );  
};

const style = StyleSheet.create({
    textstyle:{
        marginVertical:50,
        fontSize:20,
        
        
    }
});

export default Friendlist;
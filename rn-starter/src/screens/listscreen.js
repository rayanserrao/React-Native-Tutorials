import React from 'react';
import {Text,StyleSheet, FlatList} from 'react-native';



const ListScreen = () =>{

    const friends = [
        {name:'Friend1'},
        {name:'Friend2'},
        {name:'Friend3'},
        {name:'Friend4'},
        {name:'Friend5'},
        {name:'Friend6'},
        {name:'Friend7'},
        {name:'Friend8'}
    ];
    return (
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={( {item} ) => {
            return <Text style={style.textstyle}>{item.name}</Text>
        }} 
        />
    );
};

const style = StyleSheet.create({
    textstyle:{
        fontSize:20,
        marginVertical:50
    }
});

export default ListScreen;
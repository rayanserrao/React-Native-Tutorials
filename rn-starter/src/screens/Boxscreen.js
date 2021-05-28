import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

const boxScreen = () =>{
   return <View style ={styles.viewstyle}>
       <Text style={styles.textstyle}>Child 1</Text>
       <Text style={styles.textstyle}>Child 2</Text>
       <Text style={styles.textstyle}>Child 3</Text>
       </View>
    
};

const styles = StyleSheet.create({

    viewstyle : {
        borderColor:'black',
        borderWidth:4,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',

        height:300,
        padding:3
    },
    textstyle : {
        padding:5,
        
        borderColor:'red',
        borderWidth:1

    }

});

export default boxScreen;
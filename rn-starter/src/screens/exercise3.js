import React from  'react';
import {View, Text, StyleSheet} from 'react-native';

const exerscreen = () =>{
  return  <View style={styles.parent}>
     <View style ={styles.c1}></View>
     <View style ={styles.c2}></View>
     <View style ={styles.c3}></View>

    </View>
};

const styles = StyleSheet.create({

    parent:{
        
        borderWidth:3,
        height:200,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-between'
        
        

    },
    c1:{
        height:50,
        width:50,
        backgroundColor:'red',
        
        

    },
    c2:{
        height:50,
        width:50,
        backgroundColor:'green',
        marginTop:50
        
        
        
    },
    c3:{
        height:50,
        width:50,
        backgroundColor:'blue',
        
        

    }

});

export default exerscreen;
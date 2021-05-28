import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

const boxScreen = () =>{
   return <View style ={styles.viewstyle}>
       <Text style={styles.textstyle1}>Child 1</Text>
       <Text style={styles.textstyle2}>Child 2</Text>
       <Text style={styles.textstyle3}>Child 3</Text>
       </View>
    
};

const styles = StyleSheet.create({

    viewstyle : {
        borderColor:'black',
        borderWidth:4,
        flexDirection:'column',
        // alignItems:'flex-start',
        // justifyContent:'center',

        height:300,
        padding:3,
        alignItems:'stretch'
        // flexDirection:'row'
    },
    textstyle1 : {
        padding:5,
        
        borderColor:'red',
        borderWidth:1,
        // alignSelf:'flex-end'
        // flex:4
        

    },
    textstyle2 : {
        padding:5,
        
        borderColor:'red',
        borderWidth:1,
        // flex:3
        // alignSelf:'center',
        // position:'absolute'
        ...StyleSheet.absoluteFillObject


    },
    textstyle3 : {
        padding:5,
        
        borderColor:'red',
        borderWidth:1,
        // flex:1
        top:5

    }

});

export default boxScreen;
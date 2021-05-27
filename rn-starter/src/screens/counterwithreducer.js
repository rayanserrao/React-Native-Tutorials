import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const reducer = (state, action) =>{

    //action- type increment or decrement
    //state = {count:number}
    switch(action.type){
        case 'inc':
            return {...state, count:state.count+1};

        case 'dec':
            return {...state,count:state.count-1};

        default :
          return state;
    }

}

const Counterscreenred = () => {
    const [state, dispatch] = useReducer(reducer,{count:0}) 
    return <View>
        <Button title='Increase'
            onPress={() => {
                dispatch({type:'inc'});
                
            }} />


        <Button title='Decrease' onPress={() => {
            dispatch({type:'dec'});
            
        }} />

        <Text>Curent count is {state.count}</Text>


    </View>

};

const styles = StyleSheet.create({
    tedxtstyle: {
        fontSize: 30
    }
});

export default Counterscreenred;

import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const colorscreen = () => {
    const [color, setColor] = useState([]);
    console.log(color);
    return <View >
        <Button
            title='Add color'
            onPress={() => {
                setColor([...color, randomRgb()]);
            }}

        />
        <FlatList 
            keyExtractor={(item) => item}
            data={color}
            renderItem={({ item }) => {

                return <View style={{ height: 100, width: 100, backgroundColor: item, marginVertical:30 }}></View>
            }}
        />

    </View>
};


const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    textsyle: {
        marginVertical:30
    }
});

export default colorscreen;
import React, { useState } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from '../components/colorcounter'

const sqaureScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const COLOR_VALUE = 15;

    const setColor = (color, change) => {

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
        }       

        switch (color) {
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
        }

        switch (color) {
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_VALUE)}
                onDecrease={() => setColor('red', -1 * COLOR_VALUE)}
                color='Red' />
            <ColorCounter
                onDecrease={() => setColor('green',  COLOR_VALUE)}
                onIncrease={() => setColor('green',-1* COLOR_VALUE)}
                color='Green' />
            <ColorCounter
                onIncrease={() => setColor('blue',  COLOR_VALUE)}
                onDecrease={() => setColor('blue',-1* COLOR_VALUE)}
                color='Blue' />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} ></View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default sqaureScreen;
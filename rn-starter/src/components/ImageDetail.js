import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { exp } from 'react-native-reanimated';

const ImageDetail = (props) => {



    return <View>
        <Image source={props.ImagetoUse} />
        <Text> {props.title}</Text>
        <Text>Image score - {props.Imagescore}</Text>

    </View>
};

const styyles = StyleSheet.create({
    textstyle: {
        fontSize: 30
    }
});
export default ImageDetail;
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail title='Forest' ImagetoUse={require('../../assets/forest.jpg')} Imagescore={7} />
        <ImageDetail title='Beach' ImagetoUse={require('../../assets/beach.jpg')} Imagescore={8}/>
        <ImageDetail title='Mountain' ImagetoUse={require('../../assets/mountain.jpg')} Imagescore={9}/>

    </View>
};

const styles = StyleSheet.create({
    texxtstle: {
        fontSize: 30
    }
});

export default ImageScreen;
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>

      <Text style={styles.text}>Home screen</Text>
      <Button onPress={() => navigation.navigate("Components")}
        title="Go to components" />

      <Button title="go to displayname"
        onPress={() => navigation.navigate('Displynme')}
      />

      <TouchableOpacity onPress={() => navigation.navigate("FriendDisplay")}>
        <Text>take me to friend list</Text>
      </TouchableOpacity>

      <Button title="Image Screen"
        onPress={() => navigation.navigate('Imagesc')}
      />

      <Button title="Counter Apllication"
        onPress={() => navigation.navigate('Counter')}

      />

      <Button title="Color Screen "
        onPress={() => navigation.navigate('Color')}
      />

      <Button title="Sqaure Image Screen"
        onPress={() => navigation.navigate('Square')}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

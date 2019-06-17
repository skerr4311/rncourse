import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Dimensions } from 'react-native';
import MapView from "react-native-maps";

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: -36.852072, 
            longitude: 174.769118,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                Dimensions.get("window").width / 
                Dimensions.get("window").height * 
                0.0122
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView 
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}    
                />
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={() => alert('PickImage')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    button: {
        margin: 8
    }
});

export default PickLocation;PickLocation
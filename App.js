
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/wolf.jpg'

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: []
  }

  placeAddedHandler = PlaceName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ 
          key: Math.random().toString(), 
          name: PlaceName,
          image: {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5BZi4gZTaBd83MhlyJ2dHHG0IYCykDyqmIMFVOJVGGygoNc"
          }
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places} 
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

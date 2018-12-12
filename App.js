
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
//import placeImage from './src/assets/wolf.jpg'

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
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

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler} 
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler}
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


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Container, Header, Content, Button, Text, Icon, Body,Title, Left, Right  } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
type Props = {};
export default class App extends Component<Props> {

  state={
    place:''
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({useOverlay:true})
    .then((place) => {
    this.setState({place:place})
    this._map.fitToCoordinates([{latitude:place.latitude, longitude:place.longitude}], {
      edgePadding: { top: 80, right: 80, bottom: 80, left: 80 },
      animated: true,
    });
		console.log(place)
    })
    .catch(error => console.log(error.message));
  }

  render() {
    const {place} = this.state
    
    return (
      <Container style={{flex:1}}>

        <MapView
          style={styles.map}
          ref={ref => { this._map = ref; }}
          provider={PROVIDER_GOOGLE} 
          showsPointsOfInterest = {true}
          showsCompass = {true}
         
        />
        <Header style={{margin:8, backgroundColor:'white'}}>
          <Body>
            <Text numberOfLines={1} style={{color:'#acbcbb', fontSize:14}} onPress={() => this.openSearchModal()}>
              {place ? place.name :'Press to pick a place'}
            </Text>
          </Body>  
            <Right>
              <Button transparent onPress={() => this.openSearchModal()}>
              <Icon name='search' style={{color:'#4f6162'}}/>
              </Button>
            </Right>
        </Header>
        
        
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  },
});

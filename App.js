
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Container, Header, Content, Button, Text, Icon  } from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  state={
    place:''
  }
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({useOverlay:true})
    .then((place) => {
		this.setState({place:place})
		
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }
  render() {
    const {place} = this.state
    return (
      <Container stule={styles.container}>
        <Content>
          <Text >
            {place ? JSON.stringify(place) : ''}
          </Text>
        </Content>
          <Button
              block
              primary              
              onPress={() => this.openSearchModal()}
            >
              <Text>Press to pick a place</Text>
              <Icon name='pin' />
          </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});

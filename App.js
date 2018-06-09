
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Container, Header, Content, Button, Text, Icon, Body,Title, Left, Right  } from 'native-base';

type Props = {};
export default class App extends Component<Props> {

  state={
    place:''
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({useOverlay:true})
    .then((place) => {
		this.setState({place:place})
		console.log(place)
    })
    .catch(error => console.log(error.message));
  }

  render() {
    const {place} = this.state
    return (
      <Container stule={styles.container}>
        <Content>
        <Header style={{margin:8, backgroundColor:'white'}}>
        
          <Body>
            <Text  style={{color:'#acbcbb'}} onPress={() => this.openSearchModal()}>
              Pres to pick a place
            </Text>
          </Body>  
            <Right>
              <Button transparent onPress={() => this.openSearchModal()}>
              <Icon name='search' style={{color:'#4f6162'}}/>
              </Button>
            </Right>
        </Header>
          <Text >
            {place ? JSON.stringify(place) : ''}
          </Text>
        </Content>
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

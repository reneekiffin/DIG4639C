import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class Welcome extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }



  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View  style={{
          flexDirection: 'row',
          height: 200,
          padding: 30,
        }}>

          <Text>Hello and Welcome to the Productivity App.
          {"\n"}
          > Create a To Do List
          {"\n"}
          > Check the Weather
          {"\n"}
          > Create New Calendar Events

          </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});

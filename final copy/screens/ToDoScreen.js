import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import { API_KEY } from '../utils/WeatherAPIKey';

import Weather from '../components/Weather';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'To Do List',
    };
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };



  render() {
    return (
      <View  style={{
          flexDirection: 'row',
          height: 200,
          padding: 30,
        }}>

          <Text>This is where you would find your to do list</Text>

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

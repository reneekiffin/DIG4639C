import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WelcomeScreen from '../screens/Welcome';
import WeatherScreen from '../screens/WeatherScreen';
import Calendar from '../screens/Calendar';
import SettingsScreen from '../screens/SettingsScreen';
import ToDoScreen from '../screens/ToDoScreen';


const WelcomeStack = createStackNavigator({
  Welcome: WelcomeScreen,
});

WelcomeStack.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const ToDoStack = createStackNavigator({
  ToDo: ToDoScreen,
});

ToDoStack.navigationOptions = {
  tabBarLabel: 'ToDo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : ''}`
          : 'md-list'
      }
    />
  ),
};

const WeatherStack = createStackNavigator({
  Weather: WeatherScreen,
});

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cloud${focused ? '' : '-outline'}`
          : 'md-cloud'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: Calendar,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  WelcomeStack,
  ToDoStack,
  WeatherStack,
  LinksStack,
  SettingsStack,
});

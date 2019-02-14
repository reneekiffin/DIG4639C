const HomeStack = createStackNavigator({
11:   Home: HomeScreen,
12: });
13:
14: HomeStack.navigationOptions = {
15:   tabBarLabel: 'Home',
16:   tabBarIcon: ({ focused }) => (
17:     <TabBarIcon
18:       focused={focused}
19:       name={
20:         Platform.OS === 'ios'
21:           ? `ios-information-circle${focused ? '' : '-outline'}`
22:           : 'md-information-circle'
23:       }
24:     />
25:   ),
26: };

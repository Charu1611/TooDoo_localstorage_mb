import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import Home from './Home';
import Screen from './Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Intro from './Intro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveBackgroundColor:'#F2BE22',
        tabBarInactiveBackgroundColor:'white',
        tabBarActiveTintColor:"white",
        tabBarStyle: { height: 35 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold',marginBottom:7},
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="Homes" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Calendar" component={Screen} options={{ headerShown: false }} />
      
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Intro'>
      <Stack.Screen name='Intro' component={Intro}  options={{ headerShown: false }}/>
        <Stack.Screen
          name="App"
          component={App}
          options={{
            headerTitle: 'To-Doo',
            headerTitleStyle: { fontWeight: 'bold', fontSize:25, color:'rgb(74,89,100)' },
            headerLeft: null
          }}
        />
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

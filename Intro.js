import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import TypeWriter from 'react-native-typewriter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('App');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TypeWriter typing={1}>
        <Text style={{fontSize: 50, fontStyle: 'italic', fontWeight: 'bold'}}>
        <Text style={{color: 'rgb(74,89,100)'}}>Too</Text>
        <Text style={{color: '#F2BE22'}}>Doo</Text>
      </Text>
        </TypeWriter>
      </View>
    </View>
  );
}

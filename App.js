import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import TypeWriter from 'react-native-typewriter';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  
  
  const image = {
    uri: 'https://img.freepik.com/free-vector/checklist-concept-illustration_114360-2596.jpg',
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.headText}>
        Let's get started {'\n'}with{' '}
        <Text style={{color: '#F2BE22'}}>
          <TypeWriter fixed={true} typing={0.3}>
            To-Doo
          </TypeWriter>
        </Text>{' '}
      </Text>
      <View style={{flex:1, justifyContent:'center'}}>
        <Image source={image} resizeMode="contain" style={styles.image} />
      </View>
      <View styles={styles.buttonContainer} >
        <TouchableOpacity style={styles.playbtn} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.playText}> ▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  headText: {
    color: 'rgb(74,89,100)',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  playbtn:{
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playText: {
    fontSize: 100,
    color: 'rgb(74,89,100)',
    alignSelf: 'center',
    
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

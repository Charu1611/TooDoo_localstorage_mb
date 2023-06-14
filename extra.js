import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    TextInput,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { FlatList } from 'react-native-gesture-handler';
  
  export default function Home() {
    const [modalview, setModalview] = useState(false);
    const [text, setonChangeText] = React.useState('');
    const [mytask,setMytask] = useState([]);
    const removeTask= async(taskId)=>{
      const updatedTasks = mytask.filter(task=> task.id !== taskId);
      try{
          await AsyncStorage.setItem('TASK', JSON.stringify(updatedTasks));
          setMytask(updatedTasks);
        alert('Completed Successfully!');
      } catch (error) {
        console.log(error.message);
      }
    }
  
  
  useEffect(() => {
      getTasks();
    }, []);
  
    const getTasks = async () => {
      try {
        const value = await AsyncStorage.getItem('TASK');
        if (value !== null) {
          setMytask(JSON.parse(value));
        }
      } catch (e) {
        console.error('Error retrieving tasks from AsyncStorage:', e);
      }
    };
    const saveTask = async () => {
      if (text === '') return;
      const newTask = { id: Date.now().toString(), task: text };
      const updatedTasks = [...mytask, newTask];
      try {
        await AsyncStorage.setItem('TASK', JSON.stringify(updatedTasks));
        setMytask(updatedTasks);
        setonChangeText('');
        alert('Added Successfully!');
        setModalview(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <TouchableOpacity >
        <Text style={{fontSize: 20, color:'#F2BE22', fontWeight:'400'}}> <Text style={{color:'rgb(74,89,100)'}}>-</Text> {item.task}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => removeTask(item.id)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>🗑️</Text>
      </TouchableOpacity>
      </View>
    );
    const removeOldestTask = () => {
      const [oldestTask, ...remainingTasks] = mytask;
      setMytask(remainingTasks);
    };
    return (
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modalview}>
          <View style={styles.centeredView}>
            <View style={styles.modalV}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image
                  style={styles.svgImage}
                  source={{
                    uri: 'https://img.icons8.com/?size=512&id=44020&format=png',
                  }}
                />
                <Text style={styles.modalText}>Add New Task</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Type here..."
                onChangeText={text => setonChangeText(text)}
                value={text}
              />
              <Button
                color="rgb(31,60,127)"
                title="Add"
                onPress={()=>saveTask()}
              />
              <TouchableOpacity
                style={{marginTop: 10, alignSelf: 'center'}}
                onPress={() => setModalview(false)}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.toptext}>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, color: 'rgb(74,89,100)'}}>
              Hi, Charu!
            </Text>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 15,
                fontStyle: 'italic',
                color: '#F2BE22',
              }}>
              {mytask.length} Tasks Pending{' '}
            </Text>
          </View>
          <Image
            style={styles.girl}
            source={{
              uri: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png',
            }}
          />
        </View>
        <TouchableOpacity style={styles.card} onPress={() => setModalview(true)}>
          <Image
            style={styles.svgImage}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=48129&format=png',
            }}
          />
          <Text style={styles.newText}>Add New Task</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image
            style={styles.svgImage}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=44026&format=png',
            }}
          />
          <TouchableOpacity onPress={()=>{removeOldestTask()}}>
            <Text style={styles.newText}>Remove Oldest Task</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentCard}>
          <View style={{flex:1, alignItems: 'center'}}>
            <Text style={styles.taskText}>Your Tasks</Text>
  
            <FlatList showsVerticalScrollIndicator={false}
          data={mytask}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(247,249,249)',
      padding: 15,
    },
    svgImage: {
      width: 40,
      height: 40,
    },
    card: {
      backgroundColor: 'white',
      marginTop: 15,
      borderRadius: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
  
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    contentCard: {
      backgroundColor: 'white',
      flex:1,
      marginTop: 15,
      borderRadius: 20,
      padding: 10,
     
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
  
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    newText: {
      fontSize: 20,
      marginLeft: 10,
      color: '#4e4b4b',
      fontWeight: 'bold',
    },
    taskText: {
      fontSize: 27,
      marginLeft: 10,
      color: 'rgb(74,89,100)',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalV: {
      backgroundColor: 'white',
      paddingVertical: 30,
      paddingHorizontal: 40,
      borderRadius: 15,
      shadowColor: 'black',
      elevation: 5,
      width: '80%',
    },
    modalText: {
      fontSize: 20,
      marginLeft: 10,
      color: '#4e4b4b',
      fontWeight: 'bold',
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      marginVertical: 20,
      borderColor: 'grey',
      padding: 10,
      height: 40,
      color: 'black',
    },
    girl: {
          width: 50,
          height: 50,
          borderRadius: 50,
        },
        toptext: {
          justifyContent: 'center',
        },
      list:{
          alignSelf:"stretch",
      },
      item:{
          borderWidth: 0.1,
          borderRadius: 8,
          borderColor: 'rgb(74,89,100)',
          flexDirection:'row',
          justifyContent:'space-between',
          marginVertical: 10,
          padding: 15,
      },
      deleteButton: {
    
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  });
  
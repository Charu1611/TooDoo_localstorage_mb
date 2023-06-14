import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Image, Text, View } from 'react-native';


const Screen = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <Calendar 
    style={{ 
        borderWidth: 1,
        borderColor: 'gray',
        height: '50%'
      }}
      // Specify the current date
      current={'2023-06-14'}
      // Callback that gets called when the user selects a day
      
      // Mark specific dates as marked
      
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
    
   <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
   <Image resizeMode='contain' style={{height:'100%',width:'100%'}} source={{uri: 'https://img.freepik.com/premium-vector/businessman-ticked-checkbox-after-completing-responsible-project-successful-completion-business-tasks-complete-task-accomplishment-project-done-checklist-successful-achievement-business-target_458444-1802.jpg'}}/>
   </View>
    </View>
  );
};

  
  

export default Screen;
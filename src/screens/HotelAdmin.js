import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {color} from 'react-native-reanimated';
//import Icon from 'react-native-vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

//import { Icon } from 'react-native-elements';

const HotelAdmin = ({route, navigation}) => {
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [Desc, setDesc] = useState('');
  const [Phone, setPhone] = useState('');

  console.log('routr value===' + route);
  const {method, name} = route.params;
  console.log('nameeee===' + name);

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!Name.trim()) {
      alert('Please enter Name');
      return;
    }
    //Check for the Email TextInput
    if (!Desc.trim()) {
      alert('Please enter description of your hotel');
      return;
    }
    if (!Address.trim()) {
      alert('Please enter Address');
      return;
    }
    if (!Phone.trim()) {
      alert('Please enter Phone Number');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    alert('Success');
    route.params.method();
    navigation.navigate('Home', {name: 'Test Argument'});
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputView}>
        <FontAwesomeIcon name="user" color="orange" size={33} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Name"
          value={Name}
          onChangeText={text => setName(text)}
          underlineColor="white"
          activeUnderlineColor="white"
          placeholderTextColor={'lightgray'}
          cursorColor={'orange'}
          selectionColor="orange"
        />
      </View>

      <View style={styles.inputView}>
        {<IconIonicons name="location" color="orange" size={33} />}
        {/* <FontAwesomeIcon name="location" color="orange" size={33} /> */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address"
          value={Address}
          onChangeText={text => setAddress(text)}
          underlineColor="white"
          activeUnderlineColor="white"
          placeholderTextColor={'lightgray'}
          cursorColor={'orange'}
          selectionColor="orange"
        />
      </View>

      <View style={styles.inputView}>
        {/* <IconIonicons name="location" color="white" size={33}/>  */}
        <FontAwesomeIcon name="phone" color="orange" size={33} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Phone"
          value={Phone}
          onChangeText={text => setPhone(text)}
          underlineColor="white"
          activeUnderlineColor="white"
          clearTextOnFocus={true}
          placeholderTextColor={'lightgray'}
          cursorColor={'orange'}
          selectionColor="orange"
        />
      </View>

      <View style={[styles.inputView, {alignItems: 'flex-start', height: 120}]}>
        <FontAwesomeIcon name="sticky-note-o" color="orange" size={33} />
        <TextInput
          style={[styles.textInputStyle, {verticalAlign: 'top'}]}
          placeholder="Description"
          value={Desc}
          onChangeText={text => setDesc(text)}
          underlineColor="white"
          activeUnderlineColor="white"
          placeholderTextColor={'lightgray'}
          cursorColor={'orange'}
          selectionColor="orange"
          multiline={true}
          textAlignVertical="top"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={checkTextInput}>
        <Text style={{color: 'white', fontSize: 20}}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 370,
    borderRadius: 10,
  },
  textInputStyle: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
});

export default HotelAdmin;

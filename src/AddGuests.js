/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {addGuestdetails} from './Actions';

import SimpleStepper from 'react-native-simple-stepper';

//import {useNavigation} from '@react-navigation/native';

const AddGuests = ({route, navigation}) => {
  // const navigation = useNavigation();
  const [room, setroom] = useState(1);
  const [adult, setadult] = useState(2);
  const [child, setchild] = useState();
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'lightgray', flex: 1}}>
      <View style={styles.ContainerView}>
        <Text style={styles.TextStyle}> Rooms </Text>
        <SimpleStepper
          showText={true}
          initialValue={room}
          valueChanged={newValue => setroom(newValue)}
          textPosition={'center'}
        />
      </View>
      <View style={styles.ContainerView}>
        <Text style={styles.TextStyle}> Adult </Text>
        {/* <SimpleStepper showText={true} textPosition={'center'} /> */}
        <SimpleStepper
          showText={true}
          initialValue={adult}
          valueChanged={newValue => setadult(newValue)}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          paddingBottom: 20,
        }}>
        <View style={styles.ContainerView}>
          <Text style={styles.TextStyle}> Children </Text>
          <SimpleStepper
            showText={true}
            valueChanged={newvalue => setchild(newvalue)}
            textPosition={'center'}
          />
        </View>
        <Text style={{fontSize: 10, paddingLeft: 35}}> Age 0-12 years</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            dispatch(
              addGuestdetails({
                room: room,
                adult: adult,
                child: child,
              }),
            );

            navigation.goBack('Customer', {});
          }}
          title="Done"
          color="#F5FCFF"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddGuests;

const styles = StyleSheet.create({
  ContainerView: {
    height: 60,
    backgroundColor: 'white',
    paddingTop: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 0,
    justifyContent: 'space-between',
  },
  TextStyle: {
    justifyContent: 'center',
    color: 'black',
    // backgroundColor: 'white',
    padding: 10,
    paddingTop: 10,
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 400,
    marginLeft: 20,
    borderRadius: 10,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerProfile from './src/CustomerProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Customer"
          component={CustomerProfile}
          options={{title: 'Hotels & Homestays'}}
        />
        <Stack.Screen
          name="Admin"
          component={HotelAdmin}
          options={{title: 'Hotel Admin '}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Happy Stay</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200, marginBottom: 100}}
      />
      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate('Customer', {name: 'Jane'});
          }}
          title="Looking Hotel"
          color="#F5FCFF"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate('Admin', {name: 'Jane'});
          }}
          title="Hotel Admin"
          color="#F5FCFF"
        />
      </TouchableOpacity>
    </View>
  );
};
/*
const CustomerProfile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowView}>
        <Text style={styles.labelText}>City, Area or Property Name </Text>
      </View>
      <TouchableOpacity style={styles.Searchbutton}>
        <Button
          onPress={() => {
            navigation.navigate('Customer', {name: 'Jane'});
          }}
          title="Search"
          color="#4EB151"
        />
      </TouchableOpacity>
    </View>
  );
}; */

const HotelAdmin = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  Searchbutton: {
    width: 70,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  titleText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  labelText: {
    color: '#22798c',
    fontWeight: 'normal',
    fontSize: 10,
    marginTop: 5,
  },

  shadowView: {
    flex: 2,
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    marginBottom: 550,
  },
});

export default App;

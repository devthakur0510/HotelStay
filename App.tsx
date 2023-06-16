/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Easing,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import CustomerProfile from './src/CustomerProfile';
import SearchArea from './src/SearchArea';
import AddGuests from './src/AddGuests';
import SelectDates from './src/SelectDates';
import HotelAdmin from './src/HotelAdmin';
import SearchResult from './src/SearchResult';

// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

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
          options={{
            headerBackTitleVisible: false,
            title: 'Hotels & Homestays',
          }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{
            headerBackTitleVisible: false,
            title: 'Hotel List',
          }}
        />

        <Stack.Screen
          name="Admin"
          component={HotelAdmin}
          // options={{title: 'Hotel Admin'}}

          options={{
            title: 'Add Hotel Details',
            headerBackTitleVisible: false,
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
          }}
        />
        <Stack.Screen
          name="SearchArea"
          component={SearchArea}
          options={{
            title: 'Search Location',
            gestureDirection: 'vertical',
            headerBackTitleVisible: false,
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="AddGuests"
          component={AddGuests}
          options={{
            title: 'Add Guests',
            gestureDirection: 'vertical',
            headerBackTitleVisible: false,
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="SelectDates"
          component={SelectDates}
          options={{
            title: 'Select Dates',
            gestureDirection: 'vertical',
            headerBackTitleVisible: false,
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TestMethod = () => {
  console.log('CALLED FORM PREVIOUS SCREEN');
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
            navigation.navigate('Customer', {name: 'Test Argument'});
          }}
          title="Looking Hotel"
          color="#F5FCFF"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate('Admin', {
              method: TestMethod(),
              name: 'developer',
            });
          }}
          title="Hotel Admin"
          color="#F5FCFF"
        />
      </TouchableOpacity>
    </View>
  );
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

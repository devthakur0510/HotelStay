/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {Image} from 'react-native-elements/dist/image/Image';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sayaji Hotel Indore',
    address: '56 near staysai squre Indore',
    rating: '3.8',
    ratingText: 'Good',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    address: '56 near staysai squre Indore',
    rating: '4.5',
    ratingText: 'Good',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97sadas',
    title: 'Second Item',
    address: '56 near staysai squre Indore',
    rating: '3',
    ratingText: 'Good',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbddasdf63',
    title: 'Second Item',
    address: '56 near staysai squre Indore',
    rating: '3',
    ratingText: 'Good',
  },
];

const CustomerProfile = ({route, navigation}) => {
  const {startDate, endDate, searchText} = route.params;
  console.log(searchText);

  const myGuest = useSelector(state => state.nameReducer);

  const [hsroom, sethsroom] = useState(1);
  const [hsadult, sethsadult] = useState(2);
  const [hschild, sethschild] = useState(0);
  const [searchString, setsearchString] = useState(searchText);

  const [hsstartDate, sethsstartDate] = useState(0);
  const [hsendDate, sethsendDate] = useState(0);

  const [Address, setAddress] = useState('');

  const dispatch = useDispatch();

  const checkSearchInput = () => {
    console.log('checkTextInput called');
    //Check for the Name TextInput
    if (!hsroom.trim()) {
      alert('Please select room');
      return;
    }
    //Check for the Email TextInput
    if (!hsstartDate.trim()) {
      alert('Please enter description of your hotel');
      return;
    }
    if (!Address.trim()) {
      alert('Please enter Address');
      return;
    }
    navigation.navigate('SearchResult', {name: 'Test Argument'});
  };

  useEffect(() => {
    sethsadult(myGuest.adult ? myGuest.adult : 2);
    sethsroom(myGuest.room ? myGuest.room : 1);
    sethschild(myGuest.child ? myGuest.child : 0);
  }, [myGuest.adult, myGuest.room, myGuest.child]);

  // eslint-disable-next-line react/no-unstable-nested-components

  const Item = ({item}) => (
    <View style={{flex: 1, backgroundColor: '#f8f9fa', borderRadius: 10}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchResult', {name: 'Jane'});
        }}>
        <View style={styles.item}>
          <View>
            <Image
              style={{
                width: '100%',
                height: 150,
                resizeMode: 'cover',
              }}
              source={require('./assets/hotel2.webp')}
            />
          </View>
          <View style={styles.ratingView}>
            <View style={styles.ratingNumber}>
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.ratingText}>{item.ratingText}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.address}</Text>
          <Text style={styles.title}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemSeprator = () => (
    <View
      style={{
        height: 5,
        width: '100%',
        backgroundColor: 'lightgray',
      }}
    />
  );

  const SearchList = nav => {
    return (
      <SafeAreaView style={styles.containerFLatList}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item item={item} navigation={nav} demo="" />}
          renderItem={({item}) => (
            <Item item={item} navigation={nav} demo="TestDemo" />
          )}
          ItemSeparatorComponent={ItemSeprator}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadowView}>
        <Text style={styles.labelText}>City, Area or Property Name </Text>
        <Button
          onPress={() => {
            navigation.navigate('SearchArea', {name: 'Jane'});
          }}
          title={
            route.params.searchText
              ? route.params.searchText
              : 'Search AnyWhere'
          }
          color="gray"
        />
        {/* <View style={styles.searchSection}>
          {<IconIonicons name="location" color="orange" size={33} />}
          <TextInput
            style={{flex: 1, height: 40, backgroundColor: 'transparent'}}
            placeholder="City, Area or Property Name"
            value={Address}
            onChangeText={text => setAddress(text)}
          />
        </View> */}
        <View
          style={{
            backgroundColor: 'gray',
            width: '100%',
            height: 0.2,
            top: 5,
          }}
        />

        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: '45%', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.DateButton}
              onPress={() => {
                navigation.navigate('SelectDates', {name: 'test'});
              }}>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 18,
                  padding: 5,
                  marginLeft: 10,
                }}>
                {startDate} {endDate ? '-' + endDate : '   Select Date'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.labelText}>3 days </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 0.5,
              height: 60,
            }}
          />

          <View style={{width: '40%', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.DateButton}
              onPress={() => {
                navigation.navigate('AddGuests', {name: 'test'});
              }}>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 18,
                  padding: 10,
                  marginLeft: 30,
                }}>
                {hsroom} Room
              </Text>
            </TouchableOpacity>
            <Text style={styles.labelText}>
              {hsadult} Adults {hschild ? hschild + ' Children' : ''}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Searchbutton}>
          <Button
            onPress={() => {
              checkSearchInput;
            }}
            title="Search"
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: 40,
          height: '65%',
          width: '100%',
          backgroundColor: '#FFFFFF',
        }}>
        {<SearchList nav={navigation}> </SearchList>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeee4',
  },
  Searchbutton: {
    width: 150,
    height: 40,
    backgroundColor: 'orange',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    top: 20,
  },
  ratingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingNumber: {
    backgroundColor: 'orange',
    width: 40,
    height: 30,
    borderRadius: 5,
    margin: 3,
  },
  ratingText: {
    fontSize: 20,
    paddingTop: 3,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  DateButton: {
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
  labelText: {
    color: '#22798c',
    fontWeight: 'normal',
    fontSize: 10,
    alignSelf: 'center',
    top: 5,
  },

  shadowView: {
    width: '90%',
    height: '25%',
    backgroundColor: '#FFFFFF',
    borderColor: 5,
    borderRadius: 10,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
    top: 10,
  },

  containerFLatList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'transparent',
  },
  item: {
    backgroundColor: 'transparent',
    opacity: 0.8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    padding: 5,
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //backgroundColor: 'lightgray',
    padding: 5,
  },
});

export default CustomerProfile;

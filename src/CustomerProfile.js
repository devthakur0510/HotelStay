/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import {Directions} from 'react-native-gesture-handler';
import Field from './Field';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vijay Nagar indore',
    address: '56 near staysai squre Indore',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    address: '56 near staysai squre Indore',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    address: '56 near staysai squre Indore',
  },
];

type ItemProps = {title: string};

const CustomerProfile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowView}>
        <Text style={styles.labelText}>City, Area or Property Name </Text>
        <Button
          onPress={() => {
            navigation.navigate('Customer', {name: 'Jane'});
          }}
          title="Search AnyWhere"
          color="gray"
        />
        <View
          style={{
            backgroundColor: 'gray',
            width: '100%',
            height: 0.2,
            top: 5,
          }}
        />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{width: '40%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.DateButton}>
              <Button title="23Fab - 25Fab" color="orange" />
            </TouchableOpacity>
            <Text style={styles.labelText}>3 days </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 0.5,
              height: 60,
            }}></View>

          <View style={{width: '40%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.DateButton}>
              <Button title="1 Room" color="orange" />
            </TouchableOpacity>
            <Text style={styles.labelText}>2 Adults </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.Searchbutton}>
          <Button
            onPress={() => {
              navigation.navigate('Customer', {name: 'Jane'});
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
          width: '90%',
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={{fontSize: 18}}> Recent Search </Text>
        <SearchList></SearchList>
      </View>
    </View>
  );
};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.itemRow}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{title}</Text>
    </View>
    <Text style={styles.address}>{title}</Text>
  </View>
);

const SearchList = () => {
  return (
    <SafeAreaView style={styles.containerFLatList}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  itemRow: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
  },
});

export default CustomerProfile;

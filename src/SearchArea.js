import React, {useState, useNavigation} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import globalStyles from './globalStyles';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const SearchArea = ({route, navigation}) => {
  const [typedtext, settypedtext] = useState();

  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        renderDescription={row => console.log(row.description)}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      /> */}

      <View style={globalStyles.searchSection}>
        {<IconIonicons name="location" color="orange" size={33} />}
        <TextInput
          style={{flex: 1, height: 40, backgroundColor: 'transparent'}}
          placeholder="City, Area or Property Name"
          value={typedtext}
          onChangeText={text => settypedtext(text)}
        />
      </View>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() =>
          navigation.navigate('Customer', {
            searchText: typedtext,
          })
        }>
        <Text style={{color: 'white', fontSize: 20}}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchArea;

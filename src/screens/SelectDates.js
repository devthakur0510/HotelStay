// import React in our code
import React, {useState} from 'react';
import moment from 'moment';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';

const SelectDates = ({route, navigation}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change

    const datewithSmall = moment(date).format('DD-MMM');
    console.log(datewithSmall);

    const maxDate = moment(selectedStartDate).format('DD-MMM');

    console.log(maxDate);

    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Select your dates</Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date()}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="orange"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          {/* <Text style={styles.textStyle}>Selected Start Date :</Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>Selected End Date :</Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text> */}
        </View>
        <TouchableOpacity style={styles.button}>
          <Button
            onPress={() => {
              navigation.navigate('Customer', {
                startDate: moment(selectedStartDate).format('DD-MMM'),
                endDate: moment(selectedEndDate).format('DD-MMM'),
              });
            }}
            title="Done"
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SelectDates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 10,
  },
});

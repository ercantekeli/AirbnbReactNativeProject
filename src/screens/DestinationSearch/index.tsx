import {View} from 'react-native';
import React from 'react';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests', {
              viewport: details?.geometry?.viewport,
            });
          }}
          styles={{textInput: styles.textInput}}
          fetchDetails
          suppressDefaultStyles
          query={{
            key: 'AIzaSyA5Z_JjlB1hmPvkMqv8yH44s7-vZjs7hrs',
            language: 'en',
            type: '(cities)',
          }}
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationSearch;

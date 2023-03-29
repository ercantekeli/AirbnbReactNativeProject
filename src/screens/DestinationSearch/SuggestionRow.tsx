import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={40} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
};

export default SuggestionRow;

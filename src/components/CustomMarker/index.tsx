import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = ({
  coordinate,
  price,
  onPress,
  isSelected,
}: {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  price: number;
  isSelected: boolean;
  onPress: (e: any) => void;
}) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 10,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Text style={{fontWeight: 'bold', color: isSelected ? '#fff' : '#000'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

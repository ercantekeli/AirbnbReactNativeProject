import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import places from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost';

const PostScreen = () => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;

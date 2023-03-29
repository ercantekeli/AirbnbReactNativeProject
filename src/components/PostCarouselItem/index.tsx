import React from 'react';
import styles from './styles';
import {View, Image, Text, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export interface IPost {
  id: string;
  image: string;
  type: string;
  title: string;
  description: string;
  bed: number;
  bedroom: number;
  oldPrice: number;
  newPrice: number;
  totalPrice: number;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

const PostCarouselItem = ({post}: {post: IPost}): JSX.Element => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };
  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;

import React from 'react';
import styles from './styles';
import {View, Image, Text, ScrollView} from 'react-native';

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

const DetailedPost = ({post}: {post: IPost}): JSX.Element => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
      <Text style={styles.longDescription}>{post.description}</Text>
    </ScrollView>
  );
};

export default DetailedPost;

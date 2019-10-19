import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Post from './Post';

const Posts = ({ items }) => {
  if (items.length === 0) return null;
  const posts = items.map((item, index) => <Post key={index} item={item} />);
  return (
    <ScrollView
      horizontal={false}
      scrollEnabled
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {posts}
      </View>
    </ScrollView>
  );
};

Posts.propTypes = {
  items: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 300,
  },
});

export default Posts;

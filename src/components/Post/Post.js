// 3dparty
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// components
import PostHeader from './PostHeader';
import PostContent from './PostContent';

// utils
import { colors } from '../../config/colors';

export const Post = ({ post: { title, author, text } }) => (
  <View style={styles.container}>
    <PostHeader title={title} author={author} />
    <PostContent text={text} />
  </View>
);

PostContent.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: colors.postBackgroundColor,
    shadowColor: colors.postShadowColor,
    shadowRadius: 5,
    shadowOpacity: 100,
    shadowOffset: {
      height: 2,
      width: 0
    }
  }
});

export default Post;

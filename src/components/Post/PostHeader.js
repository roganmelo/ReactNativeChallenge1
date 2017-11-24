// 3dparty
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// utils
import { colors } from '../../config/colors';

export const PostHeader = ({ title, author }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
  </View>
);

PostHeader.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.postDividerColor
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.postTitleColor
  },
  author: {
    color: colors.postAuthorColor
  }
});

export default PostHeader;

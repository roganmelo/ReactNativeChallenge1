// 3dparty
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// utils
import { colors } from '../../config/colors';

export const PostContent = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

PostContent.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  text: {
    color: colors.postTextColor,
    lineHeight: 20
  }
});

export default PostContent;

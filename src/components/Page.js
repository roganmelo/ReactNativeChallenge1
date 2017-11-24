// 3dparty
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// components
import Navbar from './Navbar';

// utils
import { colors } from '../config/colors';

export const Page = ({ title, children }) => (
  <View style={styles.container}>
    <Navbar title={title} />
    <ScrollView style={styles.content}>{children}</ScrollView>
  </View>
);

Page.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackgroundColor
  },
  content: {
    padding: 20
  }
});



export default Page;

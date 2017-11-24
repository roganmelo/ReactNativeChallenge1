// 3dparty
import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

// utils
import { colors } from '../config/colors';

export const Navbar = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Navbar.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navbarBackgroundColor,
    padding: 20,
    paddingTop: (Platform.OS === 'ios') ? 40 : 20
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.navbarTextColor
  }
});

export default Navbar;

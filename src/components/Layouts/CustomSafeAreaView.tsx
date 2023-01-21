import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from '../../styles';

interface Props {
  children: React.ReactNode;
}

export default function CustomSafeAreaView({children}: Props) {
  return <SafeAreaView style={styles.mainGrap}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  mainGrap: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

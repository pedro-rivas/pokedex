import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Spacing} from '../../styles';

type Size = 'xl' | 'l' | 'm' | 's';

interface BlankSpaceProps {
  size: Size;
}

export default function BlankSpace({size}: BlankSpaceProps) {
  return <View style={styles[size]} />;
}

const styles = StyleSheet.create({
  xl: {
    height: Spacing.xl,
    width: Spacing.xl,
  },
  l: {
    height: Spacing.l,
    width: Spacing.l,
  },
  m: {
    height: Spacing.m,
    width: Spacing.m,
  },
  s: {
    height: Spacing.s,
    width: Spacing.s,
  },
});

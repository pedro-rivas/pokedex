import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useTranslation} from '../../hooks';

export default function ErrorFallbackUI() {
  const {t} = useTranslation();
  return (
    <View style={styles.mainGrap}>
      <Text>{t('error_boundary_message')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

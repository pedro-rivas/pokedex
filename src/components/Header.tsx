import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// styles
import {Spacing, Fonts, Colors} from '../styles';
// hooks
import {useNavigation} from '../hooks';
// components
import {ArrowLeftButton, BlankSpace} from '.';

interface HeaderProps {
  title: string;
  subTitle?: string;
}

function Header({title, subTitle}: HeaderProps) {
  const {goBack} = useNavigation();

  return (
    <View style={styles.mainGrap}>
      <View style={styles.header}>
        <ArrowLeftButton color={Colors.dark} onPress={goBack} />
        <BlankSpace size={'l'} />
        <Text style={Fonts.title}>{title}</Text>
      </View>
      {subTitle ? <Text style={Fonts.subTitle}>{subTitle}</Text> : null}
    </View>
  );
}

export default React.memo(Header, () => true);

const styles = StyleSheet.create({
  mainGrap: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.s,
  },
});

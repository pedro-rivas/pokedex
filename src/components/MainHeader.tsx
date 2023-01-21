import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// styles
import {Spacing, Fonts, Colors} from '../styles';
// hooks
import {useNavigation} from '../hooks';
// components
import {HeartButton} from '.';

interface MainHeaderProps {
  title: string;
  subTitle: string;
}

function MainHeader({title, subTitle}: MainHeaderProps) {
  const {navigate} = useNavigation();

  const goToPokemonScreen = () => navigate('Favorites');

  return (
    <View style={styles.mainGrap}>
      <View style={styles.header}>
        <Text style={Fonts.title}>{title}</Text>
        <HeartButton color={Colors.red} onPress={goToPokemonScreen} />
      </View>
      <Text style={Fonts.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default React.memo(MainHeader, () => true);

const styles = StyleSheet.create({
  mainGrap: {
    marginBottom: Spacing.l,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.s,
  },
});

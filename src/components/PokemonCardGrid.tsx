import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// styles
import {Spacing, Fonts, Colors} from '../styles';
// hooks
import {useNavigation} from '../hooks';
// redux
import {useAppDispatch} from '../redux/hooks';
import {favoritedAPokemon} from '../redux/slices/PokemonsSlice';
// utils
import {Logger} from '../utils';
// components
import {HeartButton} from '.';
import FastImage from 'react-native-fast-image';

interface PokemonCardGridProps {
  id: number;
  name: string;
  favorite?: boolean;
  experience: number;
  uri: string;
  grid: boolean;
}

const {width} = Dimensions.get('window');
const cardWidth = (width - Spacing.l * 3) / 2;
const imageWidth = cardWidth - Spacing.m * 2;
const cardWidthFull = cardWidth * 2 + Spacing.l;
const activeOpacity = 0.7;

export default function PokemonCardGrid({
  id,
  name,
  favorite = false,
  experience = 0,
  uri = '',
  grid,
}: PokemonCardGridProps) {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  function onPress() {
    navigate('Pokemon', {name, id, uri});
  }

  function addToFavorites() {
    Logger.log(`update favorites: ${id}`);
    dispatch(favoritedAPokemon(String(id)));
  }

  return (
    <TouchableOpacity {...{onPress, activeOpacity}}>
      <View
        style={[styles.mainGrap, {width: grid ? cardWidth : cardWidthFull}]}>
        <View style={styles.header}>
          <Text style={Fonts.labelBold}>{name}</Text>
          <HeartButton
            onPress={addToFavorites}
            color={favorite ? Colors.red : Colors.backgroundDark}
          />
        </View>
        <FastImage
          style={styles.img}
          source={{
            uri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={Fonts.labelNormal}>{`Exp: ${experience}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.m,
    justifyContent: 'center',
    marginBottom: Spacing.l,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: imageWidth,
    aspectRatio: 0.9,
    marginBottom: Spacing.m,
  },
});

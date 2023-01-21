import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

// components
import {
  CustomSafeAreaView,
  Header,
  PokemonList,
  BlankSpace,
} from '../components';
// redux
import {useAppSelector} from '../redux/hooks';
// utils
import {Logger} from '../utils';
// styles
import {Spacing} from '../styles';

export default function FavoritesScreen() {
  const {favoritePokemons} = useAppSelector(({pokemons}) => pokemons);

  useEffect(() => {
    Logger.log('mount Favorites screen');
    return () => {
      Logger.log('unmount Favorites screen');
    };
  }, []);

  return (
    <CustomSafeAreaView>
      <View style={styles.mainGrap}>
        <Header
          title={'Favorites'}
          subTitle={'Your favorite Pokémons are here.'}
        />
        <BlankSpace size={'l'} />
        <PokemonList grid data={Object.entries(favoritePokemons)} />
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    flex: 1,
    padding: Spacing.l,
    paddingBottom: 0,
  },
});

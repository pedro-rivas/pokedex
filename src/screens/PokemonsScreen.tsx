import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

// components
import {
  CustomSafeAreaView,
  MainHeader,
  PokemonList,
  ActionsHeader,
} from '../components';
// styles
import {Spacing, Colors} from '../styles';
// redux
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {updatePokemons} from '../redux/slices/PokemonsSlice';
// utils
import {Logger, parsePokemons} from '../utils';
// services
import {POKEMONS_QUERY} from '../services';
// urql
import {useQuery} from 'urql';

export default function PokemonsScreen() {
  const dispatch = useAppDispatch();
  const {
    pokemons: AllPokemons,
    loading,
    searchedPokemons,
  } = useAppSelector(({pokemons}) => pokemons);
  const [asce, setAsce] = useState(true);
  const [grid, setGrid] = useState(true);

  const [{data, error, fetching}] = useQuery({query: POKEMONS_QUERY});

  useEffect(() => {
    Logger.log('mount Pokemons screen');

    return () => {
      Logger.log('unmount Pokemons screen');
    };
  }, []);

  useEffect(() => {
    if (!fetching) {
      const parsedPokemons = parsePokemons(data);
      dispatch(updatePokemons(parsedPokemons));
    }
  }, [fetching]);

  const pokemonsFunc = React.useCallback(() => {
    if (Object.entries(searchedPokemons).length) {
      return Object.entries(searchedPokemons);
    } else if (asce) {
      return Object.entries(AllPokemons);
    } else {
      return Object.entries(AllPokemons).reverse();
    }
  }, [asce, AllPokemons, searchedPokemons]);

  const pokemons = pokemonsFunc();

  const sortPokemons = () => setAsce(val => !val);

  const toggleGrid = () => setGrid(val => !val);

  return (
    <CustomSafeAreaView>
      <View style={styles.mainGrap}>
        <MainHeader
          title={'Your Pokédex'}
          subTitle={'Who are you looking for? Search for a Pokémon by name.'}
        />
        <ActionsHeader
          sort={sortPokemons}
          toggle={toggleGrid}
          {...{asce, grid}}
        />
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} color={Colors.dark} />
          </View>
        ) : (
          <PokemonList {...{grid}} data={pokemons} />
        )}
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

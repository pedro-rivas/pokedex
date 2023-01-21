import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';

// components
import {PokemonCardGrid} from '../components';
// utils
import {Logger} from '../utils';
// styles
import {Spacing} from '../styles';
// types
import {Pokemon} from '../redux/slices/types';

interface PokemonListProps {
  data: any[];
  grid: boolean;
}

export default function PokemonList({data, grid}: PokemonListProps) {
  useEffect(() => {
    Logger.log('mount  PokemonList');
    return () => {
      Logger.log('unmount  PokemonList');
    };
  }, []);

  function renderItem({item}: {item: [key: string, item: Pokemon]}) {
    const [_, pokemon] = item;
    return (
      <PokemonCardGrid
        {...{grid}}
        id={pokemon.id}
        name={pokemon.name}
        favorite={pokemon.favorite}
        uri={pokemon.uri}
        experience={pokemon.base_experience}
      />
    );
  }

  const keyExtractor = (_: any, index: number) =>
    grid ? '_' + index.toString() : '#' + index.toString();

  return (
    <>
      {grid ? (
        <FlatList
          key={'_'}
          data={data}
          renderItem={renderItem}
          columnWrapperStyle={styles.columnWrapperStyle}
          numColumns={2}
          removeClippedSubviews
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.flatlist}
        />
      ) : (
        <FlatList
          key={'#'}
          data={data}
          renderItem={renderItem}
          removeClippedSubviews
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.flatlist}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    flex: 1,
    padding: Spacing.l,
  },
  columnWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlist: {
    paddingBottom: 20,
  },
});

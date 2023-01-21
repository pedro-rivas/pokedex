import React from 'react';

// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// types
import {Screens} from './types';
// screens
import {PokemonScreen, PokemonsScreen, FavoritesScreen} from '../screens';

const Stack = createNativeStackNavigator();
const options = {header: () => null};

export function PokemonsScreens() {
  return (
    <>
      <Stack.Screen
        name={Screens.Pokemon}
        component={PokemonScreen}
        {...{options}}
      />
      <Stack.Screen
        name={Screens.Pokemons}
        component={PokemonsScreen}
        {...{options}}
      />
    </>
  );
}

export function FavoriteScreens() {
  return (
    <>
      <Stack.Screen
        name={Screens.Favorites}
        component={FavoritesScreen}
        {...{options}}
      />
    </>
  );
}

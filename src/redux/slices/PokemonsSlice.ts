import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PokemonsState, Pokemons} from './types';

const initialState: PokemonsState = {
  pokemons: {},
  searchedPokemons: {},
  favoritePokemons: {},
  loading: true,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    updateSearchedPokemons(state, action: PayloadAction<Pokemons['data']>) {
      state.searchedPokemons = {
        ...action.payload,
      };
    },
    updatePokemons(state, action: PayloadAction<Pokemons['data']>) {
      state.pokemons = {
        ...action.payload,
      };
      state.loading = false;
    },
    favoritedAPokemon(state, action: PayloadAction<string>) {
      // toggle a pokemon
      state.pokemons = {
        ...state.pokemons,
        [action.payload]: {
          ...state.pokemons[action.payload],
          favorite: !state.pokemons[action.payload].favorite,
        },
      };
      // add a pokemon to favorites
      if (state.pokemons[action.payload].favorite) {
        state.favoritePokemons = {
          ...state.favoritePokemons,
          [action.payload]: {
            ...state.pokemons[action.payload],
            favorite: true,
          },
        };
      } else {
        // remove a pokemon from favorites
        delete state.favoritePokemons[action.payload];
      }
    },
  },
});

export const {updatePokemons, favoritedAPokemon, updateSearchedPokemons} =
  pokemonsSlice.actions;
export default pokemonsSlice.reducer;

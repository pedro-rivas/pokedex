import {configureStore} from '@reduxjs/toolkit';

import pokemonsReducer from '../slices/PokemonsSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

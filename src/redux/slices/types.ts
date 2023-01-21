export interface PokemonsQuery {
  data: {
    pokemon_v2_pokemon: [
      {
        id: number;
        name: string;
        base_experience: number;
        pokemon_v2_pokemonsprites: [
          {
            sprites: string;
          },
        ];
      },
    ];
  };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  uri: string;
  favorite: boolean;
}

export interface Pokemons {
  data: {
    [key: string]: Pokemon;
  };
}

export interface PokemonsState {
  pokemons: Pokemons['data'];
  searchedPokemons: Pokemons['data'];
  favoritePokemons: Pokemons['data'];
  loading: boolean;
}

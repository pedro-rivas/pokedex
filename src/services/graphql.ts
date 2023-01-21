import {gql} from 'urql';

export interface PokemonsQuery {
  data: {
    pokemon_v2_pokemon: [
      {
        id: 1;
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

export const POKEMONS_QUERY = gql`
  query AllPokemons {
    pokemon_v2_pokemon(limit: 20) {
      id
      name
      base_experience
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const POKEMON_QUERY = gql`
  query AllPokemons {
    pokemon_v2_pokemon(limit: 1) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
    pokemon_v2_move(where: {id: {_eq: $id}}) {
      name
      id
    }
    pokemon_v2_type(where: {id: {_eq: $id}}) {
      name
      id
    }
    pokemon_v2_experience(where: {id: {_eq: $id}}) {
      experience
    }
    pokemon_v2_location(where: {id: {_eq: $id}}) {
      name
      id
    }
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      height
      weight
    }
    pokemon_v2_pokemoncolor(where: {id: {_eq: $id}}) {
      name
      id
    }
    pokemon_v2_pokemonstat(where: {id: {_eq: $id}}) {
      effort
      base_stat
      pokemon_v2_stat {
        name
      }
    }
  }
`;

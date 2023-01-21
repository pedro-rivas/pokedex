import {PokemonsQuery, Pokemons} from '../redux/slices/types';
/**
 * Parse a pokemon
 * @param query
 * @returns
 */
export function parsePokemons(query: PokemonsQuery) {
  let pokemons: Pokemons['data'] = {};
  query.pokemon_v2_pokemon.forEach(pokemon => {
    const {id, name, base_experience, pokemon_v2_pokemonsprites} = pokemon;
    let uri = '';
    pokemon_v2_pokemonsprites.forEach(val => {
      const sprites = JSON.parse(val.sprites);
      uri = sprites.other.home.front_default;
    });

    pokemons = {
      ...pokemons,
      [pokemon.id]: {
        id,
        name,
        base_experience,
        uri: uri.trim(),
        favorite: false,
      },
    };
  });
  return pokemons;
}

/**
 * Find a pokemon
 * @param input
 * @param pokemons
 * @returns
 */
export function findAPokemon(input: string, pokemons: any) {
  const result = Object.entries(pokemons).filter((item: any) => {
    const [_, pokemon] = item;
    return pokemon.name.includes(input.toLocaleLowerCase());
  });
  let obj = {};

  if (result.length === 0) {
    return obj;
  }

  result.forEach((item: any) => {
    const [_, pokemon] = item;
    obj = {
      ...obj,
      [_]: {...pokemon},
    };
  });
  return obj;
}

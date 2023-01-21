import {parsePokemons} from '../src/utils';
import {mockData} from '../test/mockData';

describe('Pokemons', () => {
  it('it should parse pokemons', () => {
    const pokemons = parsePokemons(mockData);
    expect(pokemons['6'].base_experience).toBe(267);
    expect(pokemons['6'].name).toBe('charizard');
    expect(pokemons['6'].id).toBe(6);
    expect(pokemons['6'].favorite).toBe(false);
    expect(pokemons['6'].uri).toBeTruthy();
  });
  // search a pokemon

});

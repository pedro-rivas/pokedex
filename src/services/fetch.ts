/**
 * Fetch a pokemon
 * @param pokemon
 * @returns
 */
export async function fetchPokemon(pokemon: String) {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
  try {
    const response = await fetch(`${endpoint}${pokemon}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// styles
import {Spacing, Fonts, Colors} from '../styles';
// redux
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {updateSearchedPokemons} from '../redux/slices/PokemonsSlice';
// utils
import {Scale, findAPokemon} from '../utils';

interface ActionsHeaderProps {
  sort: () => void;
  toggle: () => void;
  asce: boolean;
  grid: boolean;
}

let timeout: ReturnType<typeof setTimeout>;

export default function ActionsHeader({
  sort,
  toggle,
  asce,
  grid,
}: ActionsHeaderProps) {
  const dispatch = useAppDispatch();
  const {pokemons} = useAppSelector(({pokemons}) => pokemons);
  const [input, setInput] = useState('');

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  });

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (input) {
        const result = findAPokemon(input, pokemons);
        dispatch(updateSearchedPokemons(result));
      } else {
        dispatch(updateSearchedPokemons({}));
      }
    }, 600);
  }, [input]);

  return (
    <View style={styles.mainGrap}>
      <TextInput
        onChangeText={val => setInput(val)}
        placeholder={'Search for a Pokémon'}
        style={styles.textInput}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.rightActionsGrap}>
          <TouchableOpacity onPress={toggle}>
            <View style={styles.itemGrap}>
              <Text style={Fonts.labelBold}>{!grid ? 'grid' : 'list'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={sort}>
            <View style={styles.itemGrap}>
              <Text style={Fonts.labelBold}>{!asce ? 'asce' : 'desc'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.m,
  },
  rightActionsGrap: {
    flexDirection: 'row',
  },
  itemGrap: {
    marginRight: Spacing.m,
  },
  textInput: {
    width: '60%',
    padding: Spacing.s,
    paddingHorizontal: Spacing.l,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 100,
    fontSize: Scale.vs(12),
  },
});

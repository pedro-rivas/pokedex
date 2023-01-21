import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';

// components
import {CustomSafeAreaView, Header, BlankSpace} from '../components';
import FastImage from 'react-native-fast-image';
// services
import {fetchPokemon} from '../services';
// utils
import {Logger} from '../utils';
// styles
import {Spacing, Fonts} from '../styles';

const {width} = Dimensions.get('window');

export default function PokemonScreen(props: any) {
  const {name, id, uri} = props.route.params;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    Logger.log('mount Pokemon screen');
    getPokemon();
    return () => {
      Logger.log('unmount Pokemon screen');
    };
  }, []);

  async function getPokemon() {
    const response = await fetchPokemon(name);
    setPokemon(response);
  }

  return (
    <CustomSafeAreaView>
      <View style={styles.mainGrap}>
        <Header title={name} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {pokemon ? (
              <View style={styles.content}>
                <Text
                  style={[Fonts.subTitle, styles.fullWidth]}>{`#${id}`}</Text>
                <FastImage
                  style={styles.img}
                  source={{
                    uri,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.infoGrap}>
                  <Text style={Fonts.labelBold}>Abilities </Text>
                  <BlankSpace size={'s'} />
                  {pokemon.abilities.map((val, i) => {
                    return (
                      <Text key={i} style={Fonts.labelNormal}>
                        {val.ability.name}
                      </Text>
                    );
                  })}
                  <BlankSpace size={'l'} />
                  <Text style={Fonts.labelBold}>Moves</Text>
                  <BlankSpace size={'s'} />
                  {pokemon.moves.map((val, i) => {
                    if (i > 15) {
                      return null;
                    }
                    return (
                      <Text key={i} style={Fonts.labelNormal}>
                        {val.move.name}
                      </Text>
                    );
                  })}
                </View>
              </View>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    flex: 1,
    padding: Spacing.l,
    paddingBottom: 0,
  },
  fullWidth: {
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 0.7,
    aspectRatio: 1,
  },
  infoGrap: {
    marginVertical: Spacing.l,
    width: '100%',
  },
});

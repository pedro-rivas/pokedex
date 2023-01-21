import React, {useRef, useEffect, useState} from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// types
import {ScreensType} from './types';
// screens
import {PokemonsScreens, FavoriteScreens} from './screens';
// utils
import {Logger} from '../utils';

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  const navigationRef = useRef<any>();

  const [initialRouteName, setInitialRoute] = useState<ScreensType>('Pokemons');
  const [appLoading, setAppLoading] = useState(false);

  useEffect(() => {
    Logger.log(`mount Navigator`);
    return () => {
      Logger.log(`unmount Navigator`);
    };
  }, []);

  function onReady() {
    Logger.log(`navigator is ready`);
  }

  if (appLoading) {
    // should be a loading indicator
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef} {...{onReady}}>
      <MainStack.Navigator {...{initialRouteName}}>
        {PokemonsScreens()}
        {FavoriteScreens()}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

import type {TextStyle} from 'react-native';
import {Scale} from '../utils';

const Spacing = {
  s: Scale.hs(8),
  m: Scale.hs(16),
  l: Scale.hs(20),
  xl: Scale.hs(40),
};
const Colors = {
  dark: '#222222',
  white: '#ffffff',
  background: '#fafafa',
  backgroundDark:'#f6f6f6',
  gray: '#8e8e8e',
  red: '#ff013a',
};

const Fonts: {[key: string]: TextStyle} = {
  title: {
    fontSize: Scale.vs(24),
    color: Colors.dark,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: Scale.vs(15),
    color: Colors.dark,
    fontWeight: 'normal',
  },
  labelBold: {
    fontWeight: 'bold',
    fontSize: Scale.vs(12),
    color: Colors.dark,
  },
  labelNormal: {
    fontWeight: 'normal',
    fontSize: Scale.vs(12),
    color: Colors.dark,
  },
};

export {Colors, Fonts, Spacing};

import React from 'react';
import {View, TouchableOpacity} from 'react-native';

// utils
import {Scale} from '../../utils';
// components
import {HeartSolidIcon} from '../';

interface HeartButtonProps {
  onPress: () => void;
  color: string;
  width?: number;
  height?: number;
}

const hitSlop = {bottom: 40, top: 40, right: 40, left: 40};
const activeOpacity = 0.7;
const iconHeight = Scale.vs(18);

export default function HeartButton({
  onPress,
  color,
  width = iconHeight,
  height = iconHeight,
}: HeartButtonProps) {
  return (
    <TouchableOpacity {...{hitSlop, activeOpacity, onPress}}>
      <View>
        <HeartSolidIcon {...{color, width, height}} />
      </View>
    </TouchableOpacity>
  );
}

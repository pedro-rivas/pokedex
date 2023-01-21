import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

type Scale = (size: number) => number;

/**
 * Scale for padding, margin
 * @param size
 * @returns
 */
const scale: Scale = size => (shortDimension / guidelineBaseWidth) * size;
/**
 * Scale for height
 * @param size
 * @returns
 */
const verticalScale: Scale = size =>
  (longDimension / guidelineBaseHeight) * size;

const hs = scale;
const vs = verticalScale;

export default {
  hs,
  vs,
};

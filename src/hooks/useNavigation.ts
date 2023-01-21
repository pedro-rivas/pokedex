import {useNavigation as useNavigationNative} from '@react-navigation/native';
import {ScreensType} from '../navigator/types';

export default function useNavigation() {
  const navigation = useNavigationNative();

  function navigate(screen: ScreensType, params?: object | undefined) {
    if (!params) {
      navigation.navigate(screen);
    } else {
      navigation.navigate(screen, {...params});
    }
  }

  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  function isFocused() {
    return navigation.isFocused();
  }

  return {
    navigate,
    goBack,
    isFocused,
  };
}

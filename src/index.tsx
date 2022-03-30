import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  EmitterSubscription,
} from 'react-native';

type StylesProps<T> = {
  [P in keyof T]: {
    [K: string]: ViewStyle | TextStyle | ImageStyle;
  };
};
type ReturnProps<T> = {
  [P in keyof T]:
    | Omit<ViewStyle, 'overflow'>
    | Omit<TextStyle, 'overflow'>
    | ImageStyle;
};

function stylesHelper<T>(st: StylesProps<T>) {
  const width = Dimensions.get('window').width;
  // @ts-ignore
  const reorderStyle: ReturnProps<T> = Object.entries(st)
    .map(([name, item]) => {
      // @ts-ignore
      const { base, ...styleReduce } = item;
      let findDimension;
      Object.keys(styleReduce).forEach((key) => {
        if (Number(key) <= Number(width)) {
          findDimension = styleReduce[Number(key)];
        }
      });
      const baseStyle = StyleSheet.flatten([base, findDimension]);
      return { style: baseStyle, name };
    })
    .reduce((memo, data) => ({ ...memo, [data.name]: data.style }), {});
  return reorderStyle;
}

function useStyle<T>(style: StylesProps<T>) {
  const [base, setBase] = useState<ReturnProps<T>>(stylesHelper(style));
  let subscription = useRef<EmitterSubscription>();
  useEffect(() => {
    setBase(stylesHelper(style));
    // listener
    // @ts-ignore
    subscription.current = Dimensions.addEventListener('change', () => {
      setBase(stylesHelper(style));
    });
    return () => {
      subscription.current?.remove();
    };
  }, []);
  return base;
}

export default function styleCreate<T>(style: StylesProps<T>) {
  const baseConfig = {
    style,
    hookStyle: function () {
      return useStyle(this.style);
    },
  };
  return { useStyle: baseConfig.hookStyle.bind(baseConfig) };
}

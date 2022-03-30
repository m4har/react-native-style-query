# react-native-style-query

react native media query with compare width window phone

## Installation

```sh
# yarn
yarn add react-native-style-query
# npm
npm i react-native-style-query
```

## example gif

![exmple](https://uc3b606595ca33f520e12204dff6.previews.dropboxusercontent.com/p/thumb/ABdNTnLAqGn-eeOFUsSNXjV1YVXAhaPAjqu2-dV0WDlVsYgE8xDyjsHrR1zd5bMkk634o46CMvvG2SaPG6IysMJFEe_jK75ysRSuN0_-OS2LzgoENwdAEd2zw-2gIaoqFExp9i3nN168lMGoAKD0IgvkQubVMSpObETZN2QkAxKQjw0KLMuw2uNRJsH7SL3caHOGKeVo--gORJSDqMoL0T9VD0wMrmRZopT0jQkOdykyCWpej8TvjiMr9RECyV_8RaXsg5PxqHtewxw53-ZyQ_iD37yAkoE5KnKCE7E_YR3QN7GYbU9kMsHoqTQWnu5sFXOa3MLcrEEqau8rG70Zv7krjP2rBxSAnsHXLO1zSYyHn-46jbLaWaBpjuYJxuD0pKDeuTNQ0mWUWajjnM1wEITicPcBH7nf97TFIXHtH6urxp4f6EN_a6G_rYnlLkOfpilYh7bDoZ1sh2kbgvtLpP6AiICAX6a3L5ezOJncuY2TCVFUrF7VPerkMFZsCGaiJCrPWQYmUhCUBIFfII6j4_7-2Ta4RyZww6V5a42RTb_I9w/p.gif)

if image cant show [open image](https://www.dropbox.com/s/sdsbz55ioa5vqc5/preview-min.gif?dl=0)

## Usage

```js
import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import styleCreate from 'react-native-style-query';

const image = 'https://picsum.photos/600';
const data = Array.from(Array(20).keys()).map((key) => ({
  key: String(key),
  image,
}));

const { useStyle } = styleCreate({
  container: {
    // base config style
    base: { flex: 1 },
  },
  imageContainer: {
    base: { marginHorizontal: 20 },
    // if 360px <= width window
    800: {
      marginHorizontal: 0,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'green',
    },
  },
  image: {
    base: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 10,
      marginVertical: 10,
    },
    800: {
      width: '45%',
      marginHorizontal: 10,
    },
  },
});
const App = () => {
  const style = useStyle();

  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.imageContainer}>
        {data.map((i) => (
          <Image key={i.key} source={{ uri: i.image }} style={style.image} />
        ))}
      </ScrollView>
    </View>
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

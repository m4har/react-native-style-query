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

![exmple](https://media0.giphy.com/media/Suc1eT1bcAPWScBlMb/giphy.gif?cid=790b7611e814f8b3052d0664aeebb47a4aafbd66ea4cf644&rid=giphy.gif&ct=g)

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

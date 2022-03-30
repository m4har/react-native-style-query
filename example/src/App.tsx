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
    base: { flex: 1 },
  },
  imageContainer: {
    'base': { marginHorizontal: 20 },
    // if 360px <= width window
    '800': {
      marginHorizontal: 0,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'green',
    },
  },
  image: {
    'base': {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 10,
      marginVertical: 10,
    },
    '800': {
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

export default App;

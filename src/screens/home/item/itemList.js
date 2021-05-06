import React, {useState} from 'react';

import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import applicationTheme from '../../../themes/applicationStyle';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ItemList({data}) {
  const [heart, setHeart] = useState(false);
  const changeHeart = () => {
    setHeart(heart => (heart = !heart));
  };
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: data.image[1]}} />
        </View>
        <View style={styles.price}>
          <Text>{data.price}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.status}>
          <Text>{data.status}</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity onPress={changeHeart}>
            {heart ? (
              <MaterialCommunityIcons
                name="heart"
                color={applicationTheme.primary}
                size={40}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color={applicationTheme.primary}
                size={40}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ItemList;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    height: 340,
    marginRight: 3,
    marginBottom: 3,
    backgroundColor: '#c0c0c0',
  },
  image: {
    width: windowWidth * 0.5,
    height: 200,
    resizeMode: 'contain',
  },
  price: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 120,
    left: 10,
  },
  title: {
    position: 'absolute',
    left: 10,
    top: 255,
    right: 10,
  },
  name: {
    color: '#000',
    fontSize: 15,
    letterSpacing: 2,
    lineHeight: 20,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'NunitoSanSBoldI',
  },
  status: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 90,
    left: 10,
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

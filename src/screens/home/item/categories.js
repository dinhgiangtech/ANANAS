import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {windowHeight, windowWidth} from '../../../themes/dimensions';
import applicationTheme from '../../../themes/applicationStyle';
import {useEffect} from 'react';
const categories = [
  {name: 'Nam', id: 1},
  {name: 'Shoe', id: 2},
  {name: 'Hoodie', id: 3},
  {name: 'Sock', id: 4},
];
const Item = ({item}) => {
  const [press, setPress] = useState(false);
  const [borderColor, setBorderColor] = useState('#000');
  const onPress = () => {
    setPress(press => (press = !press));
  };
  const setBorder = () => {
    if (press) {
      return setBorderColor(applicationTheme.primary);
    } else {
      return setBorderColor('#000');
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemCategories, {borderColor: borderColor}]}>
      <View>
        <Text style={styles.txtItemCategories}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Categories = () => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item}) => <Item item={item} press />}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.categories}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  categories: {
    height: windowHeight * 0.1,
    paddingVertical: 20,
    flexDirection: 'row',
  },

  itemCategories: {
    borderWidth: 2,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  txtItemCategories: {
    fontFamily: applicationTheme.fontFamily,
    fontSize: 18,
    color: '#000',
    letterSpacing: 3,
  },
});
export default Categories;

import firestore from '@react-native-firebase/firestore';
export const getProducts = async () => {
  try {
    const list = [];
    await firestore()
      .collection('products')
      .where('type', '==', 'Basas')
      .get()
      .then(querySnapshot => {
        console.log('Total Posts: ', querySnapshot.data());
      });
  } catch (e) {
    console.log(e);
  }
};

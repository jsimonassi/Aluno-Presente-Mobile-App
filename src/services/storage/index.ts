import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    return Promise.reject(e);
  }
};

const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data === null) {
      return Promise.resolve(null);
    }
    return Promise.resolve(JSON.parse(data));
  } catch (e) {
    return Promise.reject(e);
  }
};

const clearItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const Storage = {
  getData,
  storeData,
  clearItem,
};

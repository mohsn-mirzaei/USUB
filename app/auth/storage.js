import * as SecureStore from "expo-secure-store";

const key = "authInfo";

const storeInfo = async (authInfo) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(authInfo));
  } catch (error) {
    console.log("Error storing the auth info", error);
  }
};

const getInfo = async () => {
  try {
    const userInfo = await SecureStore.getItemAsync(key);
    return JSON.parse(userInfo);
  } catch (error) {
    console.log("Error getting the auth info");
  }
};

const removeInfo = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth info");
  }
};

export default {
  storeInfo,
  getInfo,
  removeInfo,
};

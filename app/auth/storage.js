import * as SecureStore from "expo-secure-store";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

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

const getUser = async () => {
  const token = await getInfo();
  return token ? jwtDecode(token) : null;
};

const removeInfo = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth info");
  }
};

export default {
  getUser,
  storeInfo,
  removeInfo,
  getInfo,
};

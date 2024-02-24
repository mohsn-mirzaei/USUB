import client from "./client";
import authStorage from "../auth/storage";

const getCategory = async () => {
  userInfo = await authStorage.getUser();
  const endpoint = `/service/list/${userInfo.id}`;
  if (userInfo) return client.get(endpoint);
};

export default getCategory;

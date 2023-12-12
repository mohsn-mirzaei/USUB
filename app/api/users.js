import client from "./client";

const register = (userInfo) => client.post("/users/new", userInfo);

export default { register };

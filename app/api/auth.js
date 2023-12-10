import client from "./client";

const login = (email, password) => client.post("/session", { email, password });

export default {
  login,
};

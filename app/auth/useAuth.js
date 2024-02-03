import { useContext } from "react";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

import Authcontext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(Authcontext);

  const logIn = (token) => {
    const userInfo = jwtDecode(token);
    setUser(userInfo);
    authStorage.storeInfo(userInfo);
  };

  const logOut = () => {
    setUser(null), authStorage.removeInfo();
  };

  return { user, logIn, logOut };
};

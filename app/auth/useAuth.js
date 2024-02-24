import { useContext } from "react";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

import Authcontext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(Authcontext);

  const logIn = (data) => {
    const userInfo = jwtDecode(data.token);
    setUser(userInfo);
    authStorage.storeInfo(data.token);
  };

  const logOut = () => {
    setUser(null), authStorage.removeInfo();
  };

  return { user, logIn, logOut };
};

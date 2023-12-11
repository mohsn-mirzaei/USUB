import { useContext } from "react";

import Authcontext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(Authcontext);

  const logIn = (userInfo) => {
    setUser(userInfo);
    authStorage.storeInfo(userInfo);
  };

  const logOut = () => {
    setUser(null), authStorage.removeInfo();
  };

  return { user, logIn, logOut };
};

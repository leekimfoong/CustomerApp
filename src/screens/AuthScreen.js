import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const AuthScreen = ({navigation}) => {
  const { checkLogin } = useContext(AuthContext);
  
  useEffect(() => {
    checkLogin(navigation);
  }, []);

  return null;
};

export default AuthScreen;
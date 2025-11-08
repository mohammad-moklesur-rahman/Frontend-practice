import { useEffect, useState } from "react";
import { auth } from "../../firebase/Firebase.config.js";
import { AuthContext } from "./AuthContext.jsx";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // * Sing Up with Email and Password
  const singUpWithEmailAndPassWord = (email, Password) => {
    return createUserWithEmailAndPassword(auth, email, Password);
  };

  // * Login with Email and Password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // * Sing OUt User
  const singOUt = () => {
    return signOut(auth);
  };

  // * Track User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    singUpWithEmailAndPassWord,
    loginWithEmailAndPassword,
    user,
    setUser,
    singOUt,
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

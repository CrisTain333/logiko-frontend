import { createContext, useEffect, useState } from "react";
import React from "react";
import app from "../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    localStorage.removeItem("LogikoAuthToken");
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userinfo) => {
      setUser(userinfo);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ createUser, singOutUser, loginUser, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

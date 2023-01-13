import { createContext, useState } from "react";
import React from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

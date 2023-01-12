import { createContext } from "react";
import React from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = {
    name: "crista",
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

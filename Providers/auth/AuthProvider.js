import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null);
  return <AuthContext.Provider value={{ auth, setAuth }} {...props} />;
};

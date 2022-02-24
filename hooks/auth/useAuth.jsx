import React, { useContext } from "react";
import { AuthContext } from "../../Providers";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuth must be nested inside of a AuthProvider");
  }
  return context;
};
